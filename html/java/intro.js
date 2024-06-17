//  console.log("hello javascript")
//  let a = 10;
//  let b = 20;

//  console.log(a + b);

// console.log("predrag", "systems", a, (20 + 40));


//  `` --> templet literals

//  console.log(`my age is ${10 + 20}`);

//  let name = "shivani";
//  let age = 21;
// let marathi = 83;
//  let hindi = 87;
//  let english = 60;

//  console.log(`my name is ${name} i am  ${age} years old my marathi,hindi & english marks are ${marathi} ,${hindi}, ${english}`);

//  let daynum = 2;

//  if (daynum === 1){
//      console.log("sunday");

//  }
//  else if  (daynum === 2){
//      console.log("Monday");
//  }
//  else if (daynum === 3){
//      console.log("Tuesday");
//  }
//  else if (daynum === 4){
//      console.log("wednesday");
//  }
//  else if (daynum === 5){
//      console.log("thursday");
//  }
//  else if (daynum === 6){
//      console.log("friday");
//  }
//  else if (daynum === 7){
//     console.log("saturday");
//  }else {
//     console.log("invalid day number");
// }


// let AlphaNum = 'B';

// if (AlphaNum === 'A') {
//   console.log("APPLE");
// }

// else if (AlphaNum === 'B') {
//   console.log("BOY");
// }
// else if (AlphaNum === 'C') {
//   console.log("CAT");
// }
// else if (AlphaNum === 'D') {
//   console.log("DOG");
// }
// else if (AlphaNum === 'E') {
//   console.log("ELEPHANT");
// }
// else if (AlphaNum === 'F') {
  // console.log("FROG");
// }
// //  else if (AlphaNum === 'G'){
// //     console.log("GOT");
// //  }
// //  else if (AlphaNum === 'H'){
// //     console.log("HOUSE");
// //  }
// //  else if (AlphaNum === 'I'){
// //     console.log("ICE-CREAM");
// //  }
// //  else if (AlphaNum === 'J'){
// //     console.log("JEEP");
// //  }
// //  else if (AlphaNum === 'K'){
// //     console.log("Kangaroo");
// //  }
// //  else if (AlphaNum === 'L'){
// //     console.log("LION");
// //  }
// //  else if (AlphaNum === 'M'){
// //     console.log("MONKEY");
// //  }
// //  else if (AlphaNum === 'N'){
// //     console.log("NEXT");
// //  }
// //  else if (AlphaNum === 'O'){
// //     console.log("ORANGE");
// //  }
// //  else if (AlphaNum === 'P'){
// //     console.log("PENGUIN");
// //  }
// //  else if (AlphaNum === 'Q'){
// //     console.log("QUEEN");
// //  }
// //  else if (AlphaNum === 'R'){
// //     console.log("RABBIT");
// //  }
// //  else if (AlphaNum === 'S'){
// //     console.log("SUN");
// //  }
// //  else if (AlphaNum === 'T'){
// //     console.log("TIGER");
// //  }
// //  else if (AlphaNum === 'U'){
// //     console.log("UMBRELLA");
// //  }
// //  else if (AlphaNum === 'V'){
// //     console.log("VIOLIN");
// //  }
// //  else if (AlphaNum === 'W'){
// //     console.log("WHALE");

// //  }
// //  else if (AlphaNum === X){
// //     console.log("XLOPHONE");
// //  }
// //  else if (AlphaNum === 'Y'){
// //     console.log("YAK");
// //   }
// //   else if (AlphaNum === 'Z'){
// //      console.log("ZEBRA");
// //   }

// //  else  {
// //      console.log("invalid Alpha");
// //  }

// //  let day = "sunday";
// //  if ( day == "sunday"  &&  day == "saturday")
// //    console.log( "it's week end")

// //  else if (day === "monday");







// //  let  username ="predrag";
// //  let  pass = "1234";
// //  let islogin = false;

// //  if ( usenameun == "" || password == "pass"){
// //  console.log("login sucsess")
// //  }else{
// // console.log("login failed")
// //  }

// // let a = "10";
// // let b = 20;
// // let c = +a + b;

// // console.log(c);
// // let num = 1;
// // num++;
// // num += 5;
// // ++num
// // console.log(num)

// // let number = "1";  
// //  if(num %2 == 0 ){
// //    console.log( "fuzz" );
//   }else if (num %3 == 0) {
//     console.log("buzz")
//  }else {
//     console.log("fuzzbuzz")
//  }


// for ( let n = 1 ; n < 100; n++ ){
//    if (n % 2 == 0){
//       console.log(n, "fuzz")
//     } else if ( n % 3 == 0){
//       console.log(n, "buzz")
//          }else if ( n % 3 ==0 && n % 2== 0){
//             console.log(n, "buzz && fuzz")
//          }
//          else {
//             console.log(n, "fuzzbuzz")
//          }

//       }


//object de- structuring 

// const obj = {
//  myrollNumber:1212,
//  myfullname : shivani,
// }
// const {myrollnumber; roll} = obj;

//console.log(roll);


// non parameterized function 
// function print() {
//   return "hello";

// }

// console.log(print());

// parameterrized function

// function add(a, b) {
  // console.log(`the addition of ${a} and ${b} is `);
//   return a + b
// }

// console.log(add(add(10, 30), 40));


// function add(a, b) {
//   console.log("something")
//   return a + b

//   console.log
// }

// scops:
// >funcational scope 
// >block scope
// >lexical scope

// # funcational scope 

// let x = 100;

// function add (a,b) {
//  // let x = "hi";
//   console.log(x);
// }

// console.log(x);
// add()




// const arr [];
// let respons = propmt("tell me the action ")

// while (true){
// if (response === "quite"){
//   console.log("qutting app");
// break;
// }
//    else if (response === "add"){
//     let add = prompt("add your task");
//     arr.push(add);
//    respons = propmt("tell me the action ")
//    } else if (response === "delete"){

//    }


//   }


// console.log(arr [0]);


//lexical scope example
// function outerFunction() {
//   var outerVariable = 'I am outside!';

//   function innerFunction() {
//       console.log(outerVariable); // Accesses outerVariable from outerFunction
//   }

//   innerFunction();
// }

// outerFunction(); // Output: I am outside!
// function msg(num1, num2, ...user) {
//   return user
// }
// console.log(msg(1, 2, 3, 4, 5, 6));
// function details(name) {
//   if (name === undefined) {
//     console.log("enter the value");
//   }

//   return `user name is ${name}`
// }

// console.log(details("shivani"));



// function details() {
//   let one = "App"

//   function details1
// }

// function myfun1(a, b) {
//   var a = 9;
//   var b = 10;
//   function myfun2(c, d){
//     var c = 7;
//     var d = 8;
//     function myfun3(y, z){
//       var y = 4;
//       var z = 5;
//     }
//     console.log(myfun3(b));
//   }
//   console.log(myfun2(c));
// }
// console.log(myfun1(a));


//










// const oddEvenDetector = function (req, a){
//   // let a = 3;
//   if (req === "odd"){
//     const odd = function (a){
//       if(!a%2 == 0){
//         console.log("ok");
//       }
//     }
//     return odd
//   }else if (req === "even"){
//     const even = function(a){
//       if(a%2 == 0){
//         console.log("ok");
//       }
//     }
//     return even
//   } else{
//     console.log("Invalid");
//   }
// }
//  let request = "odd"
//  console.log (oddEvenDetector(request));

//

// for(let i=0; i<10; i++){
//   for (let j=0; j < 10; j++ ){
//     const element = j;
//     console.log(`Inner Loop:${element} Out`)
//   }
// }






//while loop

// let x = 1
// while (x <=10 ){
//   console.log(`value of x is: ${x}`);
//   x++;
// }

// //do while 

// do{
//   console.log("HI this is a loop");
//   x++
//   console.log(`${x}`);
// }while (x < 10)






// const arr =[1,2,,3,4,5,6,7]

// let a =0;
// while (a < arr.length) {
//   console.log(arr[a]);
//   a++;
// }


//assingment

// const str =[1,2,3,4,5,6,7]

// let b = shivani

// while (b < str.length){
//   console.log((str[b]));
//   b++;
// }

// const arr = [1,2,3,4,5,6,7]

// for (const num of arr){
//   console.log(arr[num]);
// }


// arr.forEach(element => {
//   console.log(element);


// });



// for (let i = 0; i < 10; i--){
//   const element = i;
//   console.log(i);
// }

// lexical scope 


 function set (){
   let x = 100;
   fuction get (){
     let y = 200;
     console.log(`Inner function accseing parent varible ${x}`);
    console.log(`Inner function accseing parent varible ${y}`);

  }
// console.log(`outer function accesing own variable ${x}`);
// console.log(`outer function accesing child variable ${y}`);
// get()

// }
// set()

// cluser 
//  function makeFunc({
//    const name = "mozilla";
//   function DisplayName(){
//     console.log
//    }
//  })

// function set() {
//   let name = "shivani"

//  return function (){
//   console.log(name);
// }
// return get

// }
// const met =set()
// met()

// try and catch

try{
  console.log("hello1");
  console.log("hello2");
console.log(a);
} catch (erroe) {
  console.log(" a is undefined");
}

console.log ("hello3");
console.log ("hello4");
