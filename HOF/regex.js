// pattern matching : it is a way of matching the specific pattern in a string 
// this can be done with the help of regular expression 
// let's define a pattern
let pattern='pw';
// lets create a regular expression 
let regexone=new RegExp(pattern)

// flaag define krna hogA 
let flag='gi'
// g: global puri string m search krne k liye 
// i: case insensitive 
// dusra regulae xpression jisme patttern with flag pass kr sakte h 

let regextwo=new RegExp(pattern,flag)
// another method of crewating regex : shortcut 
let regexThree=/pw/gi
const stringToCheck='Pw is growing at rapid spped and recently they are working on pWskills to create skills based on pwcontent'
// ab m regular exprression m string check kr sakta hn and vice versa 
// 1: regular expression s puchte h 
const result=regexThree.test(stringToCheck)
console.log(result)
let result1=regextwo.test('zia')
console.log(result1)
// now ab string s puchenge k wo regualr expression krti h ya ni 
const result2=stringToCheck.match(regexThree)
console.log(result2)
// replace function : string find bhi krega nad new keyword s replace bhi kr dega
const result3=stringToCheck.replace(regexThree,'p--w')
console.log(result3)
// url k case m bhi imprtant ho zayega 
const url="https://pwskills.com/ziaurrehman%20/malik";
const helper_url=url.replace(/%20/gi,'--');
console.log(helper_url)
// regexr.com pr visit kr sakte h 

