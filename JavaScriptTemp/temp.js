/*convert temps from F to C using JS.
Set temp variable
Create conversion formula setting variables for the formula ( x - 32 ) 5/9 */

var temp = 5;

var convert = 5/9;

var freeze = -32;

var conversion = ( temp + freeze ) * convert;

console.log( conversion );

var unconvert = 1.8;

var unfreeze = 32;

var reverse = ( conversion * unconvert ) + unfreeze;

console.log(reverse); 



