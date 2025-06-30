const ramayan = ["ram","hanumaan","laxman","bharat"]
const mahabharat = ["krishna","arjun","bheam", "hanuman"]

// let newarray = ramayan.concat(mahabharat)
// console.log(newarray);
//ramayan.push(mahabharat)
//console.log(ramayan[4][2]);
  
//  newarray =ramayan.concat(mahabharat)
// console.log(newarray);
const allright = [...mahabharat, ...ramayan]
// console.log(allright);


const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = anotherarray.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("hitesh"));
console.log(Array.from("hitesh"))
console.log(Array.from({name: "hitesh"}));// intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




