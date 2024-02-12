// normal function h 
// same input k liye same output deha 
function add(x,y){
    return x+y;
}
console.log(add(10,20));

// impure function 
let count=1;
function sum(target){
    return count+=target;
}
console.log(sum(45))
// isme function mera outer variable pr depend krta h 