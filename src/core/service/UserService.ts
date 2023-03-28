
import { UserRepository } from '../repository/UserRepository';

export class UserService{

    constructor(private readonly userRepository: UserRepository){}

    save(email:string) {

        throw new Error('Not implemented yet')
    }

    getUserList(){
        
        throw new Error('Not implemented yet')
    }

}