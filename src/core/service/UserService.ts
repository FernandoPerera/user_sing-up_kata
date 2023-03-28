
import { UserRepository } from '../repository/UserRepository';

export class UserService{

    constructor(private readonly userRepository: UserRepository){}

    save(email:string) {

        if ( email != '' ) {
            this.userRepository.save(email)
        }

    }

    getUserList(){
        
        return this.userRepository.getUserList()
    }

}