// function with single parameter 
function greet(name){
    console.log("hello",name,"!");
}
greet("ziaurehman ");
greet("malik");

// function with default parameter 
function greet1(name="abhishek malhan"){
    console.log(name);
}
greet1("hello");
greet1("how are you?");
greet1();
// functions with multi parameters 
function addition(num1,num2,num3,num4,num5){
    return num1+num2+num3+num4+num5;
}
console.log(addition(1,2,3,4,5));
// passing array as  a parameter in a function 
function array(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]*5);
    }

}
const arr=[1,2,3,4,5,6,7,8,9,10];
array(arr);


// handling unlimited number of arguments 
function zia(){
    // should use argument which is array ike structure 
    // console.log(arguments);

    // we can also convert argumetns into aray using .from method

    const ans=Array.from(arguments);
    console.log(ans);
}
zia(1,2,3,4,5,6,7,7,9);
zia(77,88,8,2.6,7,8,9,9,9,9,9);

// method 2 of passign ulimited numbers of arguments 
function helo(...numbers){
    console.log(numbers);
    // ... numbers now can act as an aarray 

    // finding sum of unlimited numbers using reduce function 

    let summ=numbers.reduce(function(acc,curr){
          return acc+curr;
    },0);
    return summ;
}
helo(1,1,1,1,1,1,1,1,1,11,1,1,1);
