// jo function hof m as a argument passs hota h usko callback bolte h '
function hof(x,fn){
    console.log(x*x);
    fn();
}
hof(7,function (){
    console.log("done with call back")
})
// this functions are syncronous functions : execution od code lineby line 
// koi bhi function asynchornous piece of code hota h 
console.log("start");
setTimeout(function (){
    console.log("it takes some time to execute");
},0);
console.log("end")
// isme hj ag eforr loop laga du tou phle wo executed hoga 
for(let i=0;i<1000000;i++){}

// event loop and macrotask/callback queue ::::

