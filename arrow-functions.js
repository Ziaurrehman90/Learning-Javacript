function add(a,b){
    return a+b;
}
console.log(add(20,30));
// conversion of normal function to arrow function 

// we can omit function keyword 
// simple variable ki form m kr do 
let addition=(a,b)=>{
    return a*b;
}
console.log(addition(39,13));

// advantage of arrwo functions : we can make very short program 
// if we are returning a only thing we can write as 
let zia=(a,b)=>a*b;
// also known as almbda function an da imlicit function 

console.log(zia(111,44));