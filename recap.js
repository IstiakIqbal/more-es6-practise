/*
 1. Var let const
 2. default parameter
 3. template string
 4. arrow function
 5. destructuring and spread operator
 6. Object,keys, object.values
 7. for of loop used in array and string
 8. for in loop used in object
 */
const a = 56;
const numbers = [56, 7, 8];
const person = {
    name: 'Sakib khan'
}
const message = `Hi, ${person.name} has a ${a} access to ${numbers[2]}`

const square = x => x*x;

const {age, z, ...others } = {x: 2, y: 5, z: 3, name: 'ovi'}
