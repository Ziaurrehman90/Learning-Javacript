var modulevariable=12
function modulefunction(){
    console.log("heelo from module 1");
}

// now we can import the dara from module 1 to module 2
// export={modulefunction,modulevariable};
// export symbol 
module.exports={modulefunction,modulevariable}