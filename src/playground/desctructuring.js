// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Phil',
//         temp: 24
//     }
// };


// const {name, age, location} = person;
// console.log(`${name} is ${age}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const item = ['Coffe (hot)', '2.00', '2.5', '2.75'];
const [bevarage, small, medium, large] = item;

console.log(`A medium ${bevarage} costs ${medium}`);