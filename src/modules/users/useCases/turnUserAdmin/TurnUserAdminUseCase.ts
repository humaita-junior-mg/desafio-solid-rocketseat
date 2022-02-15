import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {

    const newUserAdmin = this.usersRepository.findById(user_id)

    if(!newUserAdmin){
        throw new Error("User Not Found")
    }

    const attToAdmin = this.usersRepository.turnAdmin(newUserAdmin)

    return attToAdmin

  }
}

export { TurnUserAdminUseCase };
