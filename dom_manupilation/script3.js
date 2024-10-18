// here we are going to learn prototype inheritence in js

function Human(name,age){
    this.name = name;
    this.age = age;
}
const human = new Human("abhinandu", 21);

// the new keyword creates a blank object names Human , like var Human ={name:"abhinandu", age:21}; 
// this keyword here also refered same as new keyword like {}.name = "abhunandu" and {}.age = 21
// always this and new keyword both are refered to same contextual meaning for creating an object

// A big question => what is constructor function 
// answer => those function which uses this keyword along with new keyword for the creation of objects is called constructor functions
// Note : a function inside the object is called  as method

function makeHuman(name,age){
    this.name= name;
    this.age = age;
    this.printName = function(){
        console.log(this.name)
    }
}

const human1 = new makeHuman("abi",22)
const human2 = new makeHuman("nandu",32)

// instead of taking this.printName in makeHuman which continaing in both human1 and human2 , we use prototype method to remove this kind of codiig practice
function madeHuman(name,age){
    this.name= name;
    this.age = age;
    
}
madeHuman.prototype.printName = function(){
    console.log(this.name);
}

const human11 = new madeHuman("abi",22)
const human21 = new madeHuman("nandu",32)