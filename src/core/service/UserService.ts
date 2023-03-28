
import { UserRepository } from '../repository/UserRepository';

export class UserService{

    constructor(private readonly userRepository: UserRepository){}

    save(email:string) {

        const isEmail = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

        if ( email != '' && isEmail ) {
            this.userRepository.save(email)
        }

    }

    getUserList(){
        
        return this.userRepository.getUserList()
    }

}