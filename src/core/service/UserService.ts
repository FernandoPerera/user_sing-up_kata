
import { UserRepository } from '../repository/UserRepository';

export class UserService{

    constructor(private readonly userRepository: UserRepository){}

    save(email:string) {

        const isEmail = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

        if ( email != '' && isEmail && !this.isEmailDuplicated(email)) {
            this.userRepository.save(email)
        }

    }

    getUserList(){
        
        return this.userRepository.getUserList()
    }

    private isEmailDuplicated(email: string): boolean {

        let exist: boolean = false

        this.getUserList().map( (userEmail) => {
             userEmail == email
                ? exist = true
                : null
        })

        return exist

    }

}