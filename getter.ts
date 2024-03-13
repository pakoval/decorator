class User {
    email: string = '';
    private _userName: string;

    constructor(email: string, _userName: string) {
        this.email = email.trim()
        this._userName = _userName.trim()
    }

    get userName(): string {
        if(!this._userName) this._userName = this.email.slice(0, this.email.indexOf('@'))
        return this._userName
    }

    set userName(name: string) {
        this._userName = name.trim()
    }
}

const Jerry: User =  new User('jerry@mail.com', 'Jerry')
const unknownUsername: User =  new User('my_mail@mail.com', '   ')

console.log(Jerry.userName, Jerry.email)
console.log('If empty name:', unknownUsername.userName, unknownUsername.email, unknownUsername)
console.log('Filled name with setter:', unknownUsername.userName = 'Butcher', unknownUsername.email, unknownUsername)