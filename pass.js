let name="ziaurrrehman";
// here we are passing the value 
let newnname=name;
console.log(newnname)
// non=primitve functionas ansd objects pr pass  by reference ka concept lagta h 
// isme value copy nhi hoti infact new object bhi purane object ko point kr rha hoga
const user={
    name:"ziaurrehman malik",
    age:20
}
const newuser=user;
console.log(newuser)
// newuser[name]="hello";
user.name="peter"
console.log(newuser)
// they poinit to same memory reference in non primitive 
// in order to change the situation do the shallow copy of the objects and sarrry

