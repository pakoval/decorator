"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const Validate = (regex) => {
    return (_target, _propertyKey, descriptor) => {
        const initialDescriptor = descriptor.value;
        descriptor.value = function (email) {
            console.log(email);
            if (regex.test(email)) {
                const result = initialDescriptor.bind(this, email);
                console.log(`Success ${email}`);
                return result();
            }
            else {
                throw new Error(`Failed ${email}`);
            }
        };
    };
};
class Contact {
    constructor(email, phone) {
        this.email = email;
        this.phone = phone;
    }
    sendEmail(email) {
        this.email = email;
        console.log('sendEmail: ', this.email);
        return this.email;
    }
    ;
    call() {
        console.log(this.phone);
    }
}
__decorate([
    Validate(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/)
], Contact.prototype, "sendEmail", null);
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const emailEl = document.getElementById('email');
    const phoneEl = document.getElementById('phone');
    let email = emailEl.value.trim();
    const phone = phoneEl.value;
    const createdContact = new Contact("", phone);
    createdContact.sendEmail(email);
});
