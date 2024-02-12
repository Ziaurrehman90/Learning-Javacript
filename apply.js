// we can also use function as  a object 
function printname(name){
    console.log("hi your name is ",name);
}
// printname("ziaurrehman")
printname.city="delhi";
printname("john")
console.log(printname.city)
// ()s wo function ko call krega memory s e and . s wo object ko call krega actua;;y wo memery m 1 hi naam s both funvtiona adn object dono creatre kr deta h 
 
// call function : used for function borrowing 1 function mko dusre function m use kr sakte h 
const user1={
    name:"ziaurrehman",
    greetings:function(){
        console.log("hello",this.name)

    }
    
    }
    user1.greetings()
    // ham user 2 m user 1 ka function use krr rhe h 
    const user2={
        name:"peter"
    }
    user1.greetings.call(user2)

    // ham now ab functionko globaal ydeclarre krte h and usme call ka applicatiob dekhten h 
    function gr(city,age){
        console.log(this.name)
        console.log("you are from",city,"and oyur age is",age)
    }
    gr.call(user1,"khurja",10)
    gr.call(user2,"bulandhshahar",44)
// call function m phla argument hoga this->ka reference and baaki ssare arguments honge different aarguments or parameters of the function 


