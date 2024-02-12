// extract hte button 
const button = document.querySelector('#button')
// deefinition of handle click function 
function handleclick(){
    // it gives alert message to the user
    alert("button has been clicked ")
}
// adding event listener
// on clicking handle function will call 
button.addEventListener('click',handleclick);
// can also add object for showing button on number of times 
// button.addEventListener('click',handleclick,{once:true});
// ab isse memory bad zayegi in ordere to remove this we can use set timer finctipn to remove the elements 

setTimeout(function(){
    button.removeEventListener('click',handleclick);
},3000)