// hr 1 agrgument k liye new function call hoga 
// syntax :
//  volume(10)(20)(30)
// function call differently for 10, 20 and 30
function volume(height){
    return function(width){
        return function(length){
            return height*width*length;
        }
    }
}
console.log(volume(10)(20)(3))