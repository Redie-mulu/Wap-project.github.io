// alert('hi');

// console.log(x);
// var x = 2;
// console.log(x);

// example one 
/*console.log(x);
var x = 2;
console.log(x);
function foo() {
    var a = 10;
    let b = 8;
    const c = 7;
    console.log(a,b,c);
    function bar() {

    }
}
foo();*/
// exmple two which is not clear-----------------

/*foo();
function foo() {
    console.log(1);
}
function foo() {
    console.log(1);
}*/
/*
function a() {
    console.log(x);
}
function b(m,n) {
    const x = 10;
    a();
    console.log(m,n);
}
const x = 20;
b(30);*/


/*console.log("another example%%%%%%%%%%%");
function b() {
    a(2);
    function a(m) {
        console.log('in a');
        console.log(x);
        y=x+m;
        console.log(y);
    }
    var x = 10;
    
}
var y = 1;
b();
console.log('x:',x); // another question .........  what if we try to pring x and othre
// we cal a() out side (in the globale )

/*let number1 = 10;
const number2 = 20;

console.log(`number1`, number1,'number2', number2);*/
/*
let arr= [1,'cat',function(){alert('hello');}]
console.log(arr[1]);
// arr[3];
// console.log(arr[2]());


let users = [
    {id:1, name:"John"},
    {id:2, name:"redi"},
    {id:3, name:"mahi"},
]
console.log('practice filter');
let someusers = users.filter(item => item.id < 3);
let s = users
.filter(function(item){
    return item.id < 3
});

console.log(s);
console.log(someusers);
// practice one map method

let lenghts = ["Bilbo", "Gandalf", "Nazgul"];
var len = lenghts.map(function(item){
    return item.length;
});
console.log(len);


var len2 = lenghts
.map(item => item.length);

console.log("map using arrow function!");

console.log(len2);

console.log("practice on reduce");
let arrR = [1,2,3,4,5,6,7] ;
let result = arrR.reduce(function(accumulator, item, index, array){
    return accumulator + item;
}, 0);
console.log(result);

let result2 = arrR.reduce((sum,item) => sum + item,0);
*/
/*const students = [
    { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
    { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
    { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
  ];
  console.log(students);
var avg = students
.filter(function(val, index, array){
    return students.courses = 'cs303'
});
 
console.log(avg);*/

/*let m = 1;
function foo(flag){
    console.log(m);
    if(flag) {
        let m = flag;
        m++;
        console.log(m);
    }
    console.log(m);
}
console.log(m);
foo(55);
console.log('another function call');
foo(0);*/

let m = 1;
function foo() {
    if (true) {
        var m = 1000
        console.log(m);
    }
}
foo();
console.log(m);

// what about this case
console.log("what about this case");
let x = 1;
function foo(flag) {
    return function bar() {
        m = 1;
    }

}
foo()();
console.log(m);

// iff
(function () {
    var y = 10;
    console.log(y);
})();

// console.log('gloval', y)
(function () {
    var g = 87;
    console.log(g);
    console.log("I am so happy with javascrept");
})();
console.log('------------');
// console.log(g);
//map filter reduce
let fruits = ['apple', 'strawberry', 'banana', 'rasberry', 'blueberry'];

let berry = fruits.filter((item, index, array) => item.endsWith('berry'));
let berry2 = fruits.filter(function (item, index, array) {
    item.endsWith('berry');
});

console.log(berry);

let berryLetter = fruits
    .filter((item) => item.endsWith('berry'))
    .map(item => item.length);

console.log(berryLetter);


// reduce 
let numbers = [1, 3, 2, 4, 6, 7, 10];
let numArray = numbers
    .reduce((acccum, current, index, array) => acccum + current, 0);

console.log(numArray);

let num2 = numbers.reduce((accum, current, index, array) => accum + current / numbers.length, 0);

console.log(num2);

let function1 = function () {
    console.log("I am learning function expression!");
}

function1();
// practice on arrow fuction

function square2(num) {
    return num * num;
}
// to arrow function
let sqr = (num) => num * num;

console.log(sqr(3));


let fruits2 = ['apple', 'strawberry', 'banana', 'rasberry', 'blueberry'];

let toNum = fruits2.filter((item) => item.endsWith('berry'))
    .map((item) => item.length);


let numbers2 = [1, 3, 2, 4, 6, 7, 10, 23, 64, 50, 100];

let avgArrow = numbers2
    .reduce((accum, current, index, array) => accum + current / numbers2.length, 0);

console.log(avgArrow);