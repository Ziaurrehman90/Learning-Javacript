let nums=[1,2,3,4,5,6,7,8,9];
// extracting the value at any particluar index 
console.log(nums[2])
const arr=nums;
console.log(arr[3])
// destructure is a way of extracting any value from any itrable objects like aaray, objects , sets etc;
// const [a]=nums;
// console.log(a);
// const [a,b]=nums;
// console.log(a);
// console.log(b)
const [c,d]=nums;
console.log(c);
console.log(d)

// converting string to array and use destrcuting 
let str="ziaurrehman malik".split(" ");
console.log(str)
let[firstname,lastname]=str;
console.log(firstname)
console.log(lastname)
// ab agr saare elements nhi lene tou tou ham particular element ko siple skip kr sakte h using comma 
let name=[11,12,13,14,15,16,17,18];
let [a,,e,,f]=name;
console.log(a)
console.log(e)
console.log(f)
// applying destructure to strinh 
let string="ziaurrehman malik";
let [m,n]=string;
console.log(m)
console.log(n)
let [z,,v,,b,,g,,h,,k]=string;
console.log(g)
// destrcuture in  set 
let setdata=new Set([1,2,3,4,5,6,6,6,7,8,9,1,1,2,3]);
console.log(setdata)
let [aa,bb,cc]=setdata;
console.log(aa);
console.log(bb);
console.log(cc);

// swapping valuse using destructure 

   let firstName="ziaurrehman";
   let Surname="malik";
   console.log(firstName);
   console.log(Surname);
//    swapping 
[Surname,firstName]=[firstName,Surname];
console.log(firstName);
console.log(Surname)

//  object destructing 
const user={
    username:"shivang pandey",
    email:"shivangpandey112@gmail.com"
}
let {username,email}=user;
console.log(email);
console.log(username);


// Nother example 
let employee={
    empid:1,
    empname:"badshah",
}
console.log(employee)
// let {empid,empname}=employee;
// console.log(empid);
// console.log(empname);
// we can also initializw any member with a default f=value 
// let {empid,empname,empdepartment="computer science and engineering "}=employee;
// console.log(empid);
// console.log(empname);
// console.log(empdepartment);
// we can also alias the nameing in destructre in object 
let {empid:id,empname:ename}=employee;
console.log(id);
console.log(ename);

// gettin specific properties 
let user1={
    name:"zaqi",
    surname:"malik",
    occupation:"business",
    income:50000,
    hobbies:["coding","travel","music","reading","mobilevisiting","instagram","scrolling"],
    comments:{
        idn:234567,
        post:'instagram',
        content:"oh shut the fuck up",
    }
}
console.log(user1);
// let  {occupation,hobbies}=user1;
// console.log(occupation,hobbies);
// special function with parameters 
// function specialFunction({occupation,surname,name}){
//     console.log(`occupation:${occupation}`);
//     console.log(`surname:${surname}`);
//     console.log(`name:${name}`);
// }
// specialFunction(user1);


// destrctureing the nested elements 
let {comments:{idn,content}}=employee;
console.log(idn);
console.log(content);





