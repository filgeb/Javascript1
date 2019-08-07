//console.log('Hi');

//1."Hello World!"
console.log('ሠላም አለም!'); // Amharic
console.log('Hallo Welt!'); // German
console.log('Hej, Verden!'); // Danish
console.log('Hej världen!'); // Swedish

//2
console.log("I'm awesome");
console.log("I'm awesome");
// 3//

let x;
console.log('the value of my variable x will be: undefined');
console.log(x);
x = 2;
console.log('the value of w will be: two');
console.log(x);

// 4 //
let myFurniture = 'table';
console.log('the value of my string will be: table');
console.log(myFurniture);
table = 'chair';
console.log('the value of my string will be: chair');
console.log(myFurniture);

//5//
let x = 7.25;
Math.round(x);

//6//
let cars = [];
console.log('the value of my array will be will be: undefined');
console.log(cars);
let petAnimals = ['cat', 'dog', 'horse'];
console.log(petAnimals);
petAnimals.push('lamp');
console.log(petAnimals);

//7//

let myString = 'this is a test';
console.log(myString);
//Find String length
stringLength = myString.length;
console.log('Pairing Strings length = ', stringLength);

//8//

let q = true;
let t = 11;
let x = ['one', 'two'];
let d = ' villa';
console.log('The value of my variable q is: ' + true);
console.log('The value of my variable t is: ' + t);
console.log('The value of my variable x is: ' + x);
console.log('The type of my variable d is:' + d);
console.log('The type of my variable d is string');
console.log('The type of my variable x is string');
console.log('The type of my variable q is boolean');
console.log('The type of my variable t is number');
console.log('Type of variable d is: ' + typeof String);
console.log('Type of variable x is: ' + typeof String);
console.log('Type of variable q is: ' + typeof boolean);
console.log('Type of variable t is: ' + typeof number);
if (typeof d == typeof x) {
  console.log('d and m are the same type');
} else {
  console.log('d and m are NOT the same type');
}
if (typeof x == typeof q) {
  console.log('x and q are the same type');
} else {
  console.log('x and q are NOT the same type');
}
if (typeof q == typeof t) {
  console.log('q and t are the same type');
} else {
  console.log('q and t are NOT the same type');
}
if (typeof d == typeof t) {
  console.log('t and d are the same type');
} else {
  console.log('d and t are NOT the same type');
}

//9//
//"The remainder operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend"

let x = 7;
let x = x % 3;
console.log(x);

//9.1//
let1 % let2;
15 % 3; // 1
21 % 4; // 1
101 % 2; // 1

//10//
let multipleArray = ['isles', true, 100];
console.log('The values of the multiple array are: ' + multipleArray);
