// mostly there are 8 data structure in js 
// out of which except object all are primitivr data ttype 
// pbject is not priitver ddata type because , it can be mad to hold the complex data values 
// it is called keyed collection or key value paur 

// creatin th eobjefct using literal 
let user={
    sno:1,
    class:"12",
    section:"A",
    percentage:96.6
}
console.log(user)
// using construcotr 
let employee=new Object()
console.log(employee)
// assigning values directly 
employee.name="ziaurrehman"
employee.s_namee="malik"
employee.age=20
employee.qualification="btech"
console.log(employee)

// creating multiple objects using a single constructor
// name of construcotr should always begin with capital letter 
function Employee(id,name,salary,department){
    this.id=id;
    this.name=name
    this.salary=salary
    this.department=department
}
let zia1=new Employee(1,"ziaurrehman",25000,"compyrt science and enginering ")
console.log(zia1)
let zia2=new Employee(2,"malik",45000,"information technology")
console.log(zia2)
// accessing elements of the pbjects 
let a={
    c:"malik",
    number:12
}
// using dot or square brackr t
console.log(a.number)
console.log(a['number'])
// adding new data to the object
const z={
    name:"mr ziaurrehman",
    age:25,
    sex:"male",
    category:"topper"

}
console.log(z);
// adding more fiels to theb object z
z.semester="fifth";
z.degree=13;
console.log(z)
// deletingg the key value pair form the object 
delete z.name;
delete z['sex']
console.log(z)

// multi key property of the object can be donw with the objedxt only 
z['degree ,semester']="yes"
console.log(z)

// iterating over the pbject 
// most common method 
for(const key in z){
    // console.log(key)
    // accseing values of the object y
    console.log(z[key])
}

