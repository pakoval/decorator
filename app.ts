const Validate = (regex: RegExp) =>  {
    return (_target: object, _propertyKey: string | symbol, descriptor: PropertyDescriptor): void => {
        const initialDescriptor = descriptor.value;

        descriptor.value = function(email: string) {
            console.log(email)
            if(regex.test(email)) {
                const result = initialDescriptor.bind(this, email)
                console.log(`Success ${email}`)
                return result()
            } else {
                throw new Error(`Failed ${email}`)
            }
        }
    }
}

class Contact {
    private email: string;
    private readonly phone: string;
    constructor(email: string, phone: string) {
        this.email = email;
        this.phone = phone;
    }
    @Validate(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/)
    sendEmail(email: string): string {
        this.email = email;
        console.log('sendEmail: ', this.email);

        return this.email
    };
    call(): void {
        console.log(this.phone)
    }
}

const contactForm: HTMLFormElement = document.querySelector('form')!;
contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const emailEl = document.getElementById('email')! as HTMLInputElement;
    const phoneEl = document.getElementById('phone')! as HTMLInputElement;

    let email: string = emailEl.value.trim();
    const phone: string = phoneEl.value;

    const createdContact = new Contact("", phone);
    createdContact.sendEmail(email)
})