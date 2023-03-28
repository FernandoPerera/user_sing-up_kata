
import { UserRepository } from '../repository/UserRepository';

export class UserService{

    constructor(private readonly userRepository: UserRepository){}

    save(email:string) {

        const itsNotEmpty: boolean = email != ''
        const emailDontExist: boolean = !this.isEmailDuplicated(email)
        const isEmail: RegExpMatchArray = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

        if ( itsNotEmpty && isEmail && emailDontExist ) {
            this.userRepository.save(email)
        }

    }

    getUserList(){
        
        return this.userRepository.getUserList()
    }

    private isEmailDuplicated(email: string): boolean {

        let existInDataBase: boolean = false

        this.getUserList().map( (userEmail) => {
             userEmail == email
                ? existInDataBase = true
                : null
        })

        return existInDataBase

    }

}