// let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// //let mycreateddate = new Date(2025  ,0,  25)
// //let mycreateddate = new Date(2025  ,0,  25, 4, 3)
// let mycreateddate = new Date("2025-04-22")
// //console.log(mycreateddate.toLocaleDateString());
// let mytimestamp = Date.now()

// console.log(mytimestamp)
// console.log(mycreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDay());

newdate.toLocaleDateString('default',{
    weekday: "long"
    
})





