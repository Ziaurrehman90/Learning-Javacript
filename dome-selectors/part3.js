// how to access the sibling and elements 
// parent ko access krna and uski first child last child waghr ko access krna 
const div=document.querySelector('#parentdiv');
const firstchildd=div.firstChild
console.log("first child is :",firstchildd)
// accessing last vhild 
const lastchilddd=div.lastChild;
console.log("the last child is ",lastchilddd)
const middlechildd=firstchildd.nextSibling;
console.log(middlechildd)