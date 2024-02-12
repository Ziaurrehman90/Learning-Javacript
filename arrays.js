// declaration of an empty aarray 
const array=[];
// declaration of an array using square brackert 
const arr=[1,2,3,4,5,6,7,8,9,0,11];
console.log(array);
console.log(arr);
let zia=10;
// function to check whether it is an array or not 
console.log(Array.isArray(zia));

// declaration using array constructor 
let fruits=new Array("apple","mango","banana","grapes");
console.log(fruits);
let num=new Array(100,200);
console.log(num);

let a=new Array("alina");
console.log(a);

// finding the size of an array 
console.log(fruits.length);
// using array literals 
let lit=Array("zia","rehman",10,33,44,55.6667,true,false,[10,22,44,55,"alina"],{name:"john"});
console.log(lit);
// deleting elements fro an array 
// array modify ni hoga jo length h wahi rahegi only element delete hoz ayega 
let b=[1,2,3,4,5,6,7,8,9];
delete b[2];
console.log(b);

// iteration over array 
// 1. using for/while/do while 
let g=[3,5,6,7,8,9,0];
for(let i=0;i<g.length;i++){
    console.log(g[i])
}
// using for-of loop 
for(let i of g){
    console.log(i);
}