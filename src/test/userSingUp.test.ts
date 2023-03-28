

import {FakeDataBase} from "../core/controller/FakeDataBase";
import {UserService} from "../core/service/UserService";

/*
 *
 *  Casos de uso : 
 *      
 *          - '' -> dont add mail into database
 * 
 *          - example.com -> dont add into database
 * 
 *          - 'fernando@gmail.com' -> add into database
 * 
 *          - ['fernando@gmail.com], 'fernando@gmail.com' -> dont add into database
 * 
 */

describe('Sign-up', () => {

    it('dont add a email into database if the email is empty', () => {

        const email = ''
        const database = new FakeDataBase()
        const service = new UserService(database)

        const spy = jest.spyOn(service, 'save')
        service.save(email)
        const usersRecords = service.getUserList()

        expect(spy).toHaveBeenCalled()
        expect(usersRecords.length).toBe(0)
        
    })

})