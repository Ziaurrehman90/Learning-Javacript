// it stands for : immediately invoke function expression 
// declare k tym pr hi function call ho zayega 
// syntax 
// (function (){
// console.log("hey ziaurrehman waassup")
// })()

// (()=>{
//     console.log("this is self invoking function");
// }) ()
// data privacy 
// (function (){
// console.log('hi')
// })()
// (()=>{
//     console.log('this is iife function dude ')
// })()

// can be used for data privacty 
(()=>{
    let password='stfu30+lpa';
   const showPassword= ()=>{
          console.log(password);
    }
    showPassword();
})()
// showPassword()