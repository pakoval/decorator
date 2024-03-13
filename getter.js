"use strict";
class User {
    constructor(email, _userName) {
        this.email = '';
        this.email = email.trim();
        this._userName = _userName.trim();
    }
    get userName() {
        if (!this._userName)
            this._userName = this.email.slice(0, this.email.indexOf('@'));
        return this._userName;
    }
    set userName(name) {
        this._userName = name.trim();
    }
}
const Jerry = new User('jerry@mail.com', 'Jerry');
const unknownUsername = new User('my_mail@mail.com', '   ');
console.log(Jerry.userName, Jerry.email);
console.log('If empty name:', unknownUsername.userName, unknownUsername.email, unknownUsername);
console.log('Filled name with setter:', unknownUsername.userName = 'Butcher', unknownUsername.email, unknownUsername);
