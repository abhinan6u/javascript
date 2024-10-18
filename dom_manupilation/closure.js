// here we will learn more about closures 
// a function that will return another functions is called closure

function countt(){
    counter = 0;
    return function(){
        counter++;
        console.log(counter);
    }
}
// for closure we need to understadn about function and memory , when we call the function the execition context will have funciton name countt
// in the exection context , but once the function return anything the scope of countt will be removed from the memory including the counter varaible
// so when counter is removed from memory it will no longer used in return function but here we are using the variable counter this is because of 
// closure property of javascript