// function add(a,b)
// {
//     return a+b;
// }

// console.log(addednum=add(3,4));
// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// function add(...num1)
// {
//     let sum=0;
//     console.log(num1);
//     for(let i of num1)
//     {
// sum+=Number(i);
//     }
//     console.log(sum);
//     console.log(typeof(sum));
// }
// add(23,34,45,64);
// // ----------------------------scope-------------------------------
// //function 
// // if a function does not have a return statement js will return undefined

// console.log(addone(5))

// function addone(num){
//     return num + 1
// }
// //function expression 
// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }
// // hosting is allowed but in fuction expression the value is not initialized it will be initialized only that line is executed that is why this is throwing an error


// //arrow function
// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


//two type of returning of value explicit and implicit
//explicit
// const adding=(a,b)=>
// {
//     return a+b;

// }

// console.log(adding(3,4));
//other  way is implicit
const adding=(a,b)=>(a+b);
console.log(adding(3,4));
