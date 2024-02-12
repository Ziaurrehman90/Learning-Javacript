// for each loop for arrray 
let arr=[11,22,33,44,55,66,77,88,99];
// foreach : hr element pr perform krega 
// with normal function 
arr.forEach(function(element,index,arr){
    console.log(index,element,arr)
})
// with arrow function 
arr.forEach((element,index,arr)=>{
    console.log(index,element,arr)
})

// coverting ans into uppercae with the help of foresch 
let arr1=['ziaurrehman','shivang','prakhar','varun','pratyush','adnan'];
arr1.forEach((e)=>{
   console.log(e.toUpperCase())
})

// we can also use map insetead of foreach 
arr.map((e,index,arr)=>{
    console.log(e,index,arr)
})
arr1.map(x=(el)=>{
  console.log(el.toUpperCase())
})

// filter : yeh wo elements return krega jo specifiv conditions ko follow kr rhe honge :)
const herowithnameendswithN=arr1.filter((e)=>{
    // isme return jarur krna hota h 
     return e.endsWith('n');
})
console.log(herowithnameendswithN)

// reduce function : a shortcut for foreacah and map situation jisme prev and current maintain krke chlte h 
let zia=[10,50,100,240];
let sol=zia.reduce((prev,current)=>
    prev+current
,2)
console.log(sol)

const gameScore=[200,300,310,250,150];
// finding function 
