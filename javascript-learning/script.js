// functions
// return
// undefined not defined , null
// arrays
// objects
// prototypes
// prototypes inheritence
// asynchronous
// es6 climax
// questions
// climax




// function
// es5 and es6
// es5 contain 3 types of fns=> fn statements , fn expressions and anonymous fns
//es6 contain => fat arrow fn this can be written in 3 types 
// a) basic fat arrow 
// b) fat arrow with one parameter
// c) fat arrow with implicit return

// // functions - js mein function normal programming
// language jaise nahi hai, iska matlab hai, yaha par js
// mein, functions banaane ke liye type nahi batana padt
// bas aapko function word likhna padega and aap usey ko
// naam deke bana skte ho

// // indepth - js mein functions first class functions
// ka darja diya gaya hai, jiska matlab hai, ki js mein
// functions ko value/variable ki tarah treat kiya

// what is function => the code which we use repeatedly again and again
// why we need =>to reuse the code and which we want to use that code again and again in future
// parameter => inside the function declaration or definition is called parameter and inside the  fn calling  is called argument

function abcdee(){
    //fn statement
}

const abcd = function(){
    // fn expression
}

// function(){
//     // anonymous fn
// }
// fat arrow 
var a = ()=>{
    
}
var b =()=>{};

// b) fat arrow with one parameter

var g = (ab) => {console.log(ab)};
// or we can remove the brackets of ab like
var g = ab =>{console.log(ab);
}

g(12)


//c) arrow fn with implicit return 

var ae = (a) => "abhin"; //here the abhinandu is implicit returned in all cases
console.log(ae(a))


// return ka matlab hua, jaha par bhi return lageg
// uske aage jo bhi likhoge wo jaayega jaha par funct
// call hua tha, return functions ke andar lagta hai

function abcd(){
    return 12;
}

console.log(abcd());