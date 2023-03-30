
export interface UserRepository {

    save(email: string): void

    getUserList(): string[]

    getUserByEmail(email: string): string

}