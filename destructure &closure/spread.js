// 1. creating a copy of the arrow i.e shaaloow copy using spread 
let nums=[10,20,30,40];
console.log(nums);
// creating a copy to new array 
let newAr=[...nums];
console.log(newAr)
nums[0]=1000;
console.log(nums);
console.log(newAr)

// 2. adding new vlaues 
let ans=[12,23,34];
let ans1=[...ans,45,56,767,78,89];
console.log(ans);
console.log(ans1);
let obj={
    name:"pw skills",
    course:"full stack web development ",
}
// let newObj={...obj};
// console.log(newObj)
let newObj={...obj,rating:10};
console.log(newObj);

// 3. concatnate of two arrays 
let arr1=[10,23,34];
let arr2=[44,55,66];
let concateArr=[...arr1,...arr2];
console.log(concateArr)

// 4. spreading array elemets as a parameters 
let zia=[10,20,30,40,11];
function calculateMax(nums1,nums2,nums3,nums4,nums5){
    console.log(Math.max(nums1,nums2,nums3,nums4,nums5));

}
calculateMax(...zia);

// 5. can be used with strings
// simply converts the strings into characters 
let str="ziaurrrehman malik";
let str1=[...str];
console.log(str);
console.log(str1)

// 6. cAN be used with objects 


