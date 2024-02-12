// lets first create an object 
let obj={
    name:"ziaurrehman",
    salary:150000,
    age:20
}
// lets do iterate over the objefct 
// extracting keys of the object 
// let keyy=Object.keys(obj)
// console.log(keys);
// with this it has converted into array now lets do appply any kinda operations of an array 
// let keys=Object.keys(obj).forEach((key) => console.log(key))
// in the same way lets extract values 
// let values=Object.values(obj)
// console.log(values)

// extracting the key-value pair as a 2d vector 
// let keyvalue=Object.entries(obj)
// console.log(keyvalue)
// and we get the 2d array 
// again we can convert 2d vector to object using fromentries method 
// let conversion=Object.fromEntries(keyvalue)
// console.log(conversion)

// crreating the coying of the object using asssign method 
let newObj=Object.assign({},obj)
console.log(newObj)
console.log(obj==newObj)
// freezing the values of the object 
// no furthur modification to the object can be  possible 
// Object.freeze(obj)
obj.name="malik"
console.log(obj)
// checking whether the object is frreze or not 
console.log(Object.isFrozen(obj))
// seal : we can simply do the modification to the pre exisitng properties but yep we can add further more properties 
obj.department="computer science and engineering ";
console.log(obj)
Object.seal(obj)
obj.name="hello, all"
// creating a new object using create function 
let user1={name:"hola"};
let user2=Object.create(user1)
console.log(user1)
console.log(user2)
console.log(user2.name)
user2.age=28
console.log(user2.age)
// hasown method is used to find whether the  key is present in the object or not 
console.log(Object.hasOwn(obj,'name'))
console.log(Object.hasOwn(user1,'age'))
// finding the description of the particular values 
console.log(Object.getOwnPropertyDescriptor(obj,'name'))


