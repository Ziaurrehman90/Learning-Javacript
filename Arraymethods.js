// add and remove items 
// at the end of the array 
let arr=[10,20,30,40]
console.log(arr)
// push function is udes to insert 
arr.push(60)
arr.push(70);
console.log(arr)

// pop function is used to delete elemetns 
let popped=arr.pop()
console.log(popped)
console.log(arr)
// at the beginning of the array
// unshift is used to insert elelent
let num=[10,20,30,40];
console.log(num);
num.unshift(50)
num.unshift(60)
console.log(num)
// shift is used to delete 
let ans=num.shift()
console.log(ans)
console.log(num)

// slice function used to extract elements in a range 
let b=["I","love","you","alina"]
// give starting and ending index but ending index is not included 
console.log(b.slice(1,3))
console.log(b.slice(0))
console.log(b.slice(-2,-4))
console.log(b.slice(-2))
// copying an array 
let c=[11,22,33,44,55,66,77,88,99]
let d=c.slice()
console.log(d)
// splice method works as a swis knife 
let e=[1,2,3,4,5,6,7,8,9];
// for deleteting elements pass starting index and number of elelents to be deleted 
e.splice(2,4)
console.log(e)
// deelting and replacing at the same time 
e.splice(2,4,"hello","ziaurrehman","malik","or","batoa","kya","huehuheuheu")
console.log(e)
// addition of elements 
// when 0 is passed it means insertion would happen there would be no deletino 
let f=[1,2,3,4,5,6,7,8];
f.splice(2,0,"hello","all",'wassup')
console.log(f)
// concatenation function 
// addition of the values 
let x=[10,20,30];
console.log(x.concat([80,90]))
console.log(x.concat([100,1200,23],[99,88,77]))
// iterator 

// searching in an array 
// finding the index value of the array elelemmt using indexof method
let malik=[10,"zia","hello",true,false];
console.log(malik.indexOf("zia"))
console.log(malik.indexOf(false))
console.log(malik.indexOf("stupid"))
// includes : it returns boolean to determine only whether the element is present or not 
console.log(malik.includes("zia"))
console.log(malik.includes("hello"))

// find option 
let m=[
    {id:1,user:"zia"},
    {id:2,user:"prakhar"},
    {id:3,user:"insha"},
    {id:4,user:"love"}
]
// reversing of an array : reverse 
let q=[1,2,3,4,4,5,6,7,8,9];
q.reverse()
console.log(q)
// split function to convert string to array 
let names='zia,peter,malik,rehman'
let str=names.split(',')
console.log(str)
// breaking inot letters of an array 
let sp=names.split('')
console.log(sp)
for( let strs of str){
   console.log("send message to ",strs)

}

// converting vector oof string into strings using join method
let vc=['hello','how','are','you']
let strrr=vc.join("what the fuck")
console.log(strrr)