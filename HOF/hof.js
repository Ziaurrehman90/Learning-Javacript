// when we are treating a function just like a variable it becomes higher order function 
const powerTwo=(n)=>{
    return n**2;

}
console.log(powerTwo(2));
// now passing one function as a argument to another function 
function powerThree(powerTwo,n){

    // ab power2 wala function aa zAYyega 
  return powerTwo(n)*n;

}
console.log(powerThree(powerTwo,4))

// returning a function from another function 
function sayhello(){
    // yeh function khud 1 function return krega 
    return ()=>{
        console.log("hello ziaurrehman wassup");
    }
}

let ans=sayhello();
// isko caall krne s function aa zayega 
console.log(ans)
// agr m is function ko print karau tou ans aa zayeg a
ans()

// higher order function as a nested function 
// function k andar function k andar function different differrent 
const higherorder=(n)=>{
    // iske andaer 1 na function krtrew h 
    const firstfunction=(m)=>{
        // iske andar another function call krte h 
        const secondFunction=(p)=>{
            // is function k andasr n,m,p 3no available honge 
            return n+m+p;
        }
        return secondFunction;
    }
    return firstfunction;
}
// ab is function ko caall krne ka syntax thdas differnt h 
console.log(higherorder(2)(3)(88));

// e.g. of using higher order function 
const nums=[1,2,3,4,5,6,7,8,9,10];
const sumarray=(arr)=>{
    let ans=0;
    arr.forEach(function(element){
        ans+=element;
    })
    return ans;
}
console.log(sumarray(nums))

// this functions are widely used in set interval and time interval functions 
// setInterval: it is uded to repeat the things after a particular things : for e.g. 
function sayhi(){
    console.log("hello,ziaurrehman wassup")
}
// setInterval(sayhi,1000);
// hr 1 sec baad function chlta rhega 
// settimeout : it is ude to excuter the statement only once after a particular time 
setTimeout(sayhi,5000)