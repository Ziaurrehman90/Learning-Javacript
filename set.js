// set is unordered collection that stores unique values 
// creation of a sety
const setExample=new Set();
console.log(setExample)
// addding values to set
setExample.add(10)
setExample.add(20)
setExample.add(30)
setExample.add(10)
setExample.add(30)
console.log(setExample)
// deleting complete set 
// setExample.clear()
console.log(setExample)
// deleting specific value fro set 
// console.log(setExample.delete(30))
setExample.delete(30)
console.log(setExample)

// entering key value pair in set i.e. objects 
const data=new Set();
data.add("john")
data.add(
    {
        "ziaurrehman":20
    }
)
console.log(data)
// printing the key value pair using enteries method 
console.log(data.entries())

// manipulation in the set using foreach method 
const ex=new Set();
ex.add(10)
ex.add(20)
ex.add(30)
ex.add(40)
ex.add(50)
ex.add(60)
ex.add(70)
ex.add(80)
console.log(ex)
function multiply(value1,value2){
    console.log(`ex[${value1}: ex[${value2*2}]`)
}

ex.forEach(multiply);

// finding whether keyt is presetn in set or ot 
console.log(ex.has(70))
// finding key & values in set 
console.log(ex.keys())
console.log(data.values())

// creating a set from the array 
let arr=[10,20,30,40,10,20,30,40,10,20,30,40,10,20,30,40,10,20,30,40]
let arrset=new Set(arr)
// converting set to array 
console.log(Array.from(arrset))
