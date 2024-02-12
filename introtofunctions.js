// let a=10;
// let b=20;
// console.log(a+b);

// declaration of functions 
// let a=20;
// let b=44;
// function add(){
//     console.log(a+b);
// }
// // function calling 
// add();

// with parametrs 

// function add(a,b){
//     console.log(a+b);
// }
// add(10,40);
// add(55,78.77);

// passing function to a new varialble 
let sum=function add(a,b){
    console.log(a+b);
}
console.log(sum(99,888));

// 1 function ko dusre function m bhi use kr sakte h 
function x(callback){
    console.log("hellou");
    callback();
}
function y(){
    console.log("zia is here");
}
x(y);

// returning a function 

//  function bhi 1 new function ko return kr sakta h 
function zia(){
    return function sum(){
        // console.log(a-b);

    }
}

// returning a function 

function adddition(a,b){
    return a*b;
}
console.log(adddition(11,33));

