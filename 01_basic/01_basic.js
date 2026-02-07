// hoisting means moving the definition to the top of the code

// var let const

/* var -> prefered not to use because of functional and block scope 
var is hoisted and initialized as undefined.
*/
/* let -> block scope
       -> hoisted but not initialized in tdz(temporal dead zone(time btw hoisting and initialization)
       -> can be reassigned but not redefined)
*/

/* const -> hoisted but not initialized d
         -> cannot be reassigned or redefined
         -> block scoped

*/
const ab = 'lara';
// ab="tejas"; error
console.log (ab);
