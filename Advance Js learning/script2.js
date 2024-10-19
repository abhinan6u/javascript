// now we will learn more about call, apply , bind
//call 


const obj ={
    name:"abhinandu",
    age:23,
}
function abcd(){
    console.log(this);
}
abcd.call(obj)

// apply
const obj1={
    name:"abhinandu",
    age:23,
}
function abcd(a,b,c,d,e){
    console.log(this,a,b,c,d,e);
}
abcd.apply(obj1,[1,3,4,5,5])

// bind
const obj3 ={
    name:"abhinandu",
    age:23,
}
function abcd(){
    console.log(this);
}
const ans = abcd.bind(obj) // bind is used for the purpose of this context later on the code