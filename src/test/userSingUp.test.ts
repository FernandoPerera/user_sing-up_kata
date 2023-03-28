
import { FakeDataBase } from "../core/controller/FakeUserController";
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

    it('dont add a email into database if the email is empty', () => {

        const database = new FakeDataBase()
        const service = new UserService(database)
        const email = ''

        const spy = jest.spyOn(service, 'save')
        service.save(email)
        const usersRecords = service.getUserList()

        expect(spy).toHaveBeenCalled()
        expect(usersRecords.length).toBe(0)

    })

    it('dont add a email into database if the email have a wrong format', () => {

        const database = new FakeDataBase()
        const service = new UserService(database)
        const email = 'example.com'

        const spy = jest.spyOn(service, 'save')
        service.save(email)
        const usersRecords = service.getUserList()

        expect(spy).toHaveBeenCalled()
        expect(usersRecords.length).toBe(0)

    })

    it('add email into database if have a correct format', () => {

        const database = new FakeDataBase()
        const service = new UserService(database)
        const email = 'example@gmail.com'

        const spy = jest.spyOn(service, 'save')
        service.save(email)
        const usersRecords = service.getUserList()

        expect(spy).toHaveBeenCalled()
        expect(usersRecords.length).toBe(1)

    })

    it('dont add email into database if the email already exists in the database', () => {

        const database = new FakeDataBase()
        const service = new UserService(database)
        const email = 'existing_email@gmail.com'

        const spy = jest.spyOn(service, 'save')
        service.save(email)
        service.save(email)
        const usersRecords = service.getUserList()

        expect(spy).toHaveBeenCalled()
        expect(usersRecords.length).toBe(1)

    })

})