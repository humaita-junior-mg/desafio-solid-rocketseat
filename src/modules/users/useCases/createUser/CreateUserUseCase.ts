import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {

    const verify = this.usersRepository.findByEmail(email)

    if(verify){
        throw new Error("User Already Exists!")
    }
    
    return this.usersRepository.create({email, name})

  }
}

export { CreateUserUseCase };
