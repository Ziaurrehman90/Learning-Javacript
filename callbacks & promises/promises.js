function createPromise(){
    return new Promise(function exe(resolve,reject){
// promise 1 call back function leta h jiske parameters hote h resolve and reject 
     setTimeout(function f(){
             console.log("time is out")
     },3000);
    });
}