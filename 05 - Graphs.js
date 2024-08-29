
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

class City {
    constructor(name) {
        this.name = name;
        this.residents = [];
    }

    addResident(person) {
        this.residents.push(person);
    }

    getResidents() {
        return this.residents;
    }
}

// Test.
const city1 = new City('Cc');
const city2 = new City('Bb');


const person1 = new Person('x', 1, city1);
const person2 = new Person('y', 2, city1);

city1.addResident(person1);
city2.addResident(person2);

function print(city) {
    console.log(`People living in ${city.name}:`);
    city.getResidents().forEach(person => {
        console.log(`${person.name}, ${person.age} years old`);
    });
}

print(city1);
prin(city2);

