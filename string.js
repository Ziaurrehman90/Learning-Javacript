// first way 
console.log("hello world")
// secodn way 
console.log('hello world')
// third way
console.log(`ziaurrehman `)
// use of backtrace : it simply uses the string value and do the mathematical caluculations and finally gives the output as a string 
console.log(`${20+30}`)
console.log(`hi, ziaurrehman !! we're paying you a amount of ${1000000} as your first salalry`)
// finding lenght of the string 
console.log("ziaurrehman malik".length)
// accessing elements in as tring 
console.log("ziaurrehman malik is a software enginneer"[10])
// in javascript strings are immutable 
// e.g
let str="hello";
str[2]='z'
console.log(str)

// use of at  and char at functtion 
let sp="students";
// addition of stringd 
console.log("hello"+"world"+" "+"wasssup")
console.log(`${'hello '} ${"waassup"}`)
// endswith function 
// it reutrun true if string ends with a particcular string 
let name='ziaurerhman malik'
console.log(name.endsWith('malik'))

// include function : to cehck whether it contains string or not 
console.log("students".includes('stup'))
// indexof:to find the indedx of the character 
console.log("indexof".indexOf('o'))

//  padend and padstart function :
//  2 arguments lega or jab tak string ki length first argument k barrabar ni hoti tab tak second argument ko insert krta rahega 
// padstart: starting m inserty krega 
// padend: ending mm insert krega 
console.log("gl bajaj institute of technology nad management".padEnd(100,'!!'))
console.log("gl bajaj institute of technology nad management".padStart(100,'$$$$'))

//  repeat function : to repeat the string to number of times 
console.log("hello world".repeat(10))
// replace function : replace new word from pre existing word : but only replace first occurence 
console.log("hey you you you  wassup".replace("you","ziaurrehman"))
// replace all : replace all occurence
console.log("hey you you you  wassup".replaceAll("you","ziaurrehman")) 
// trim method : to remove the space from front and back side 
console.log("    ziaurrehman is a good boy and he is an engineer    ".trim())


//  date and time function : 
// creation of date-time constructor 
let datetime=new Date()
console.log(datetime)
// current date in millisecodn
console.log(Date.now())
// finding the date vlaue using getdate function 
console.log(datetime.getDate())
// finding the day value 
console.log(datetime.getDay())
console.log(datetime.getFullYear())
console.log(datetime.getHours())
console.log(datetime.getMinutes())
console.log(datetime.getTime())
// we can also set the values using set function 
console.log(datetime.setDate(22))
console.log(datetime.getDate())


