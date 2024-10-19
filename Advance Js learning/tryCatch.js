// here we will learn about try catch in js

function divide(a,b){
    try{
        if (b==0){
            throw Error("some thing is wrong!");;
        }
    }
    catch(err){
            console.log(err);
        }
}
divide(10,0);