// map  => loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array.
const numbers = [2, 4, 6, 7, 10];

function doubleIt(num){
    return num*2;
}
const result = numbers.map(doubleIt)
// console.log(result);


// const doubled = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubled.push(double);
// }
// console.log(doubled);

// const double2 = n => n*2;

const output = numbers.map(n => n*2);
// console.log(output);
const doubled = numbers.map(num => num*2);
const fiveBonus = numbers.map(num => num+5);
const half = numbers.map(num => num/2);
// console.log(half);

const friends = ['Tom', 'john', 'micheal', 'Tanim', 'Ishtiaque', 'Miraz'];
const lengths = friends.map(frnd =>frnd.length)
// console.log(lengths);
const firstLetter = friends.map(friend => friend[0]);