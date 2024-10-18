// undefined , not defined ,null learning will start here

// undefined is a value =>ye value tabi de jati hai jab variable ko koi value na mila ho, means , treat it as garbage value
// not defined is an error
// null is also a value => because null will be received if we not found something when we called it


// arrays

var users = ["abhnandu","nandu","hars","raghu","mukhesh"]

var arr1 =[1,2,"3",function(){},{},4]; // array can have any type of values

//how to  loops in arrays
var arr = [1,2,3,4,5]
arr.forEach(function(val){ // this val parameter takes each value from the arr like 1 ,2 ,3, 4, 5
    console.log("hey");
})
// how to loop an array and do something in each element of array

arr.forEach(function(val){ // this val parameter takes each value from the arr like 1 ,2 ,3, 4, 5
    console.log(val+ 1);
})