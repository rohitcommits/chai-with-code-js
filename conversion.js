// let score = null
// console.log(typeof score)
// let valueInNumber = Number (score)
// console.log(typeof valueInNumber)
// //"44"=>44
// "44qwe"=> NaN
//true => 1; false =>0
 
// let isLoggedIn = 1
// let booleanIsLoggedIn = boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false 
// "" => false
// "hitesh" => true 

// let somenumber = 33
// let stringnumber  = string(somenumber)
// console.log(typeof stringnumber);

//***************************Opratation***************************

// let value = 3 
// let negvalue = -value  
// console.log(negvalue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);
  
// let str1 = "hello"
// let str2 = "rohit"
// str3 = str1 + str2 // hello rohit
// console.log(str3)

console.log("1" +2); // 12
console.log(1 + "2");// 12
console.log("1" +2 + 2);// 122
console.log(1 + 2 + "2")// 32

console.log(3+ 4 * 5 % 3);

console.log( + true);
console.log(+"")
 
let num1, num2,  num3 
num1 = num2 = num3 = 2 + 2

let gamecounter = 100;
gamecounter++;
console.log(gamecounter)

// prefix increment;
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
y2 = ++x2;
console.log(y , x)
console.log(x2, y2)

// postfix increment
let x1 = 3;
const y1 = x1++;
// x is 4; y is 3

let x21 = 3n;
const y21 = x21++;
// x2 is 4n; y2 is 3n
console.log(y1 , x1)
console.log(x21, y21)