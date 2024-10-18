// going to learn this keyword 
// this have very strange behviour in js it acts in many ways according to its situation

// global - window
console.log(this)
// function - window
function abcd(){
    console.log(this);
}

abcd()
// method - object

var obj = {
    name:function(){
        console.log(this);
    },
    age : 23,
    email :"nandupostbank@gmail.com"
}
obj.name();
// fn inside method according to es5 - window
var obj2 = {
    sayName:function(){
        console.log(this); // return obj in this case
        function childfn(){
             console.log(this); // return window in this case 
        }
        childfn();
    },
}
obj2.sayName()
// fn inside method according to es6 - object
// arrow fn inside the method will take this from the parent
//case1
var obj3 ={
    sayName: function(){
        // console.log(this);
        const child =()=>{
            console.log(this.age) // it will return object in this case
        }
        child();
    },

    age:25,
    email: "abhi@gmail.com"
}
obj3.sayName()

//case2
// obj4 is the global scope so here this binding with window
// so we should not use arrow fn for the first time as method in object which will take window as the binding
var obj4 ={
    sayName: ()=>{
        console.log(this); // return the window
        const child =()=>{
            console.log(this) // it will return object in this case
        }
        child();
    },

    age:25,
    email: "abhi@gmail.com"
}
obj4.sayName()
// this value inside constructor - new blank object
function add(){
    console.log(this);
}
const ans = new add(); // it will return empty blank object

// this value inside event listner - that element jispar event listen laga

document.querySelector("button").addEventListener("click",function(){
    console.log(this);
})