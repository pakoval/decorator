"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Animal {
    constructor() {
        this.kind = 'cat';
        this.age = 3;
        this.name = '';
    }
}
class Transport {
    constructor() {
        this.type = 'Vehicle';
        this.brand = 'Audi';
        this.year = 2016;
    }
}
function MultipleExtension(...ancestors) {
    return function (target) {
        return class extends target {
            constructor(..._) {
                super();
                ancestors.forEach(ancestor => {
                    Object.assign(this, new ancestor());
                });
            }
        };
    };
}
let Horse = class Horse {
    constructor() {
        this.speed = 50;
        this.destination = '';
    }
};
Horse = __decorate([
    MultipleExtension(Transport, Animal)
], Horse);
const del = new Horse();
// console.log(del)
