
import {UserRepository} from '../repository/UserRepository'

export class FakeDataBase implements UserRepository {

    private users: Array<string> = []

    save(email: string) { 
        this.users.push(email)
    }

    getUserList(){
        return this.users
    }

    getUserByEmail(email: string): string {
        return email
    }
    
}