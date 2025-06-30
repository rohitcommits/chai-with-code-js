const myarray = [0,1,2,3,4,5,6,7]
//console.log(myarray[2]);
// const myheros=["shaktiman","naagraj","doremon"]

 const myarray2= new Array("ram",  "radha" ," shita" , "krishna")

// myarray.push("ram",5) // its insert the value
// myarray.push("ram")
// myarray.pop() // its remove the last value 
// myarray.unshift("ram") //add value in the starting
// myarray.shift()// remove the first value
console.log(myarray.includes(5));
console.log(myarray.indexOf(4));
 
const newarray = myarray.join()
console.log(myarray);
console.log(newarray);
console.log(typeof newarray);

// slice  , splice
console.log("a",myarray);

const myn1= myarray.slice(1,3)

console.log(myn1);
console.log("B",myarray);

const myn2 = myarray.splice(1,4);
console.log(myn2);

console.log("C",myarray);




console.log(myarray);

