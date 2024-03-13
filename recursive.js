"use strict";
const animals = {
    predators: {
        cats: {
            wildCats: [
                {
                    name: 'lion',
                    weight: 35
                },
                {
                    name: 'tiger',
                    weight: 30
                }
            ],
            homeCats: [{
                    name: 'cats',
                    weight: 5
                }]
        },
        dogs: [{
                name: 'wolf',
                weight: 25
            }],
        bears: [{
                name: 'Brown bear',
                weight: 100
            }, {
                name: 'polar bear',
                weight: 120
            }]
    },
    herbivores: {
        artiodactyls: [{
                name: 'cow',
                weight: 180
            }, {
                name: 'deer',
                weight: 150
            }, {
                name: 'giraffe',
                weight: 180
            }],
        hares: [{
                name: 'hare',
                weight: 4
            }, {
                name: 'rabbit',
                weight: 4
            }]
    }
};
function mathAnimalName(keyValue, name, animalChain) {
    if (keyValue === name) {
        console.log(`Match! ${name.toUpperCase()} is was found`);
        animalChain.push(keyValue);
        console.log(animalChain.join(' > '));
    }
}
function findAnimalChain(target, name, animalChain) {
    if (Array.isArray(target)) {
        target.forEach(obj => {
            mathAnimalName(obj['name'], name, animalChain);
        });
    }
    else {
        for (const key in target) {
            animalChain.push(key);
            findAnimalChain(target[key], name, animalChain);
            animalChain.pop();
        }
    }
    return animalChain;
}
// findAnimalChain(animals, 'polar bear', [])
// findAnimalChain(animals, 'Brown bear', [])
