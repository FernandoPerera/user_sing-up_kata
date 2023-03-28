
import {UserRepository} from '../repository/UserRepository'

export class FakeDataBase implements UserRepository {

    private users = []

    save(email: string) { 
        this.users.push(email)
    }

    getUserList(){
        return this.users
    }
    
}