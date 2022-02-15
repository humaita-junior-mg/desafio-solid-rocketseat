import { v4 as uuidV4 } from "uuid";

class User {

    id: string;
    name: string;
    admin: boolean;
    email: string;
    created_at: Date;
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
        }

        Object.assign(this, {
            admin: false,
            updated_at: new Date()
        })
    }

}

export { User };
