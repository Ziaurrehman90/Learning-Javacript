class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    object="wipro";
    greet(){
        console.log(`Hello , my name is ${this.name} and my age is  ${this.age}`);
    }
}
const obj=new Person("ziaurrehman",20);
obj.greet();
console.log(obj.object)

// example of inheritence 
class Animal{
    constructor(name){
        this.name=name;
    }
}
let jonny=new Animal("lion");
console.log(jonny.name)

// now ab new class bnata hn jo animal class s kuch parametes legi 
class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }
}
// we can siply make constructor with the help of the function 
function Person1(name,age){
    this.name=name;
    this.age=age;
    this.greet=function(){
        console.log(`hello my name is ${this.name} and my age is ${this.age}`);
    }
}
let rahul= new Person1("rahul",22);
let amit= new Person1("amit",21);
rahul.greet()
amit.greet()

