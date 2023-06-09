
import { FakeDataBase } from "../core/controller/FakeUserController"
import { UserService } from "../core/service/UserService"

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

    it('add email into database if have a correct format with jest.fn', () => {

        const email = 'example@gmail.com'

        service.getUserList = jest.fn().mockReturnValue([email])
        const usersRecords = service.getUserList()

        jest.spyOn(service, 'save')
        expect(usersRecords.length).toBe(1)

    })

    it('get a email if exist in database with jest.fn', () => {

        const email = 'example@gmail.com'

        service.getUserByEmail = jest.fn().mockReturnValue(email)
        const userByEmail = service.getUserByEmail(email)

        jest.spyOn(service, 'getUserByEmail')
        expect(email).toBe(userByEmail)

    })

})