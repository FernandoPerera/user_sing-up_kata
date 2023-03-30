
import { FakeDataBase } from "../core/controller/FakeUserController";
import { UserRepository } from "../core/repository/UserRepository";
import { UserService } from "../core/service/UserService";

/*
 *
 *  Casos de uso : 
 *      
 *          - '' -> dont add email into database
 * 
 *          - example.com -> dont add into database
 * 
 *          - 'example@gmail.com' -> add into database
 * 
 *          - ['example@gmail.com], 'example@gmail.com' -> dont add into database
 * 
 */

describe('Sign-up', () => {

    let database: FakeDataBase
    let service: UserService
    let spy: jest.SpyInstance<void, [email: string], any>

    beforeEach( () => {
        database = new FakeDataBase()
        service = new UserService(database)
        spy = jest.spyOn(service, 'save')
    })

    it('dont add a email into database if the email is empty', () => {

        const email = ''

        service.save(email)
        const usersRecords = service.getUserList()

        expect(spy).toHaveBeenCalled()
        expect(usersRecords.length).toBe(0)

    })

    it('dont add a email into database if the email have a wrong format', () => {

        const email = 'example.com'

        service.save(email)
        const usersRecords = service.getUserList()

        expect(spy).toHaveBeenCalled()
        expect(usersRecords.length).toBe(0)

    })

    it('add email into database if have a correct format', () => {

        const email = 'example@gmail.com'

        service.save(email)
        const usersRecords = service.getUserList()

        expect(spy).toHaveBeenCalled()
        expect(usersRecords.length).toBe(1)

    })

    it('dont add email into database if the email already exists in the database', () => {

        const email = 'existing_email@gmail.com'

        service.save(email)
        service.save(email)
        const usersRecords = service.getUserList()

        expect(spy).toHaveBeenCalled()
        expect(usersRecords.length).toBe(1)

    })

})