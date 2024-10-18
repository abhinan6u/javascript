// object learning will start from here

// what=>objects are used to store the entire details of a single entity unlike array are used to collection of different elements
// how => represented as {} 
 var obj = {
    name:"abhinandu",
    age : 2,
    email: "nandupostbank@gmail.com"
 };
 var obj2 = new Object(); //we can declare the object as like this also
 console.log(obj);
 obj2;

 var battery = {
    company : "nikon",
    price: 2300,
    isWorking : true,
    purpose : "photos"
 }

//  battery.company returns nikon we are using ".operator" to access elements inside the object , so console.log here console is also an object
// when and why


// here we start learn about sync and asynchronous javascript nature

// sync code runs line by line
// async code will not run line by line instead all async code will start execution which ever async task get completed first it will be executed
// indepth it will contain 1)main stack 2) web api 3)callback queue 
// untill main stack does not get empty the async code in callback queue willnot enter in main stack