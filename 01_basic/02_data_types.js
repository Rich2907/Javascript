/*
datatypes 2 
 -> primitive 
 ->non primitive 
  
 primitive 
 ->string ""
 ->number 23
 ->boolean true/false
 ->symbol make unique
 ->bigint 567n
 ->null absence of a value ( not equivalent to null)
 */
let a=Symbol(123);
let b=Symbol(123);
console.log(`we print the type of each we get ${typeof(a)} and for b ${typeof(b)}`) ;//string interpolation
console.log(a==b);
// console.log(typeof(null)); //object  
// console.log(typeof (undefined)); //undefined

// ++++++++++++++++++++++++++++++operators++++++++++++++++++++++++++++
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// the way == works is different from comparator. in comparator it first type convert and then check so null is converted to 0


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2); 