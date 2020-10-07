// Object Destructuring

/* const person = {
    age: 40,
    location: {
        city: 'Istanbul',
        temp: 26
    }
}

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}`);


const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`is ${temperature} in ${city}`);
}; */


const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;


console.log(publisherName);

// Array Destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pens', '19147'];

const [street, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`);



const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);