class Animal {
    kind: string = 'cat';
    age: number = 3;
    name: string = '';
}

class Transport {
    type: string = 'Vehicle';
    brand: string = 'Audi';
    year: number = 2016;
}

function MultipleExtension(...ancestors: any[]) {
    return function<T extends { new (...ancestors: any[]): {} }> (target: T) {
        return class extends target {
            constructor(..._: any[]) {
                super();
                ancestors.forEach(ancestor => {
                    Object.assign(this, new ancestor())
                })
            }
        }
    }
}

@MultipleExtension(Transport, Animal)
class Horse {
    speed: number = 50;
    destination: string = '';
}

const del = new Horse()
// console.log(del)
