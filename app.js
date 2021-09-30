//javascript booleans type
let x = 5,y='5';
// console.log(x==y);

//JavaScript Arrays-> written with square brackets 
const cars = ['Suzuki','Volkswagen','Toyota','BMW','Ferrari']
for (let i=0;i<cars.length;i++) {
    // console.log(cars[i])
}
//associative arrays
//in this type of array each stored value is associated with a unique key,which can be used as an index.(unique keys are string types)
const arr = []

arr['name']='Sharad Bhandari';
arr['phone'] = 9847895491;
arr['location'] = 'kalanki';
arr.age=25;

// console.log(Array.isArray(arr))
// console.log(typeof(arr))
// console.log(arr)

let webDevBasicsCourse = {
    courseName : 'Web Dev 01', 
    courseLength : '4 weeks',
    courseSyllabus: ['HTML','CSS','JavaScript'],
    courseFeedback: function(student){
        return `${student} says ${this.courseName} was awesome ! ${this.courseSyllabus[2]}`
    }
}

// x = webDevBasicsCourse.courseFeedback('Ram')
// console.log(x)
// console.log(webDevBasicsCourse.courseSyllabus[2])
Object.keys(webDevBasicsCourse).forEach(function(key){
    // console.log(key)
    // console.log([webDevBasicsCourse[key]])
    // console.log(`${key}:${webDevBasicsCourse[key]}`);
})

// if we want to store collecting of items in a variable we use array,if we want to represnt a thing then we use object
//JavaScript functions-> block of code designed to perform particular task 
/* Syntax
function function_name(parameter1,parameter2,parameter3) {
    //code to be executed
};
*/

const Subjects = ['mathematics','science','english','nepali','opt math','computer']
const evenNumbers = [4,6,8,10,12,14]

evenTimes = evenNumbers.map(mapFunction);
function mapFunction(value,index,array){
    return value*2;
}
// console.log(evenTimes)

//js array iteration

//js array map() methods creates a new array by performing a function on each array element .

//foreach()-> use call back function(this method calls a function once for each array element )

let txt = "";

Subjects.forEach(cb);
document.getElementById('demo').innerHTML=txt;
function cb(value,index,array) {
    txt += value +'<br>'
}

evenNumbers.push(6);

//perform sum of evenNumber array above using foreach

let total = 0;
let val = '';

evenNumbers.forEach(calcFunc);

document.getElementById('eachSum').innerHTML = `Elements: ${val}`;
document.getElementById('eachTotal').innerHTML = `Total: ${total}`;

function calcFunc(value,index,array) {
    val += value +',';
    total += value;
}

// forEach(),map(),filter(),reduce() works similar 

//filter()
const alist = ['sharad',12,'ABC','xyz',10,45,2,'Bhandari'];

//use js to seperate string and number

const astring = [];
const anum = [];
alist.filter(filterFunc);
// console.log(z)

function filterFunc (value,index,array){

    if (typeof(value)== 'string') {
        astring.push(value);
    } else {
        anum.push(value);
    }
    return typeof(value) == 'string';
}

// console.log(astring);
// console.log(anum);
//key difference -> 
//foreach calls a callback function for each array element and creates new array accordingly.
//map uses callback function for each element and creates the result according the call back func
//filter creates the arry of those element which satisfy the condtion mentioned in callback function . 
//forEach doesnot create new array ,it perform callback func operation on existence array.
//map() creates a new array .
//map() callback function returns value
//filter() callback function returns boolean value(true/false)


//reduce -> this method runs a function (cb function ) on each array element to produce a single value.
//works left-to-right approach in array.

let numlist = [2,4,6,8,10,12,8];
let son = numlist.reduce(cb);

// console.log(son)

function cb (total,value){
    return total+value;
}
//js math object




// console.log(Math.PI)
//changing math number to integer 
/*
-> Math.round(x)
->Math.ceil(x)
->Math.floor(x)
->Math.trunc(x)

*/
let a = 2.36589; console.log(Math.round(a));

let a1 = 98.99993214568525; console.log(Math.round(a1));

let b = 3.99999999999; console.log(Math.ceil(b)); console.log(Math.floor(b));

//trunc returns the integer part of number

console.log(Math.trunc(b)); console.log(Math.sign(-25));console.log(Math.sign(25));console.log(Math.sign(0));

//Math.sign(value)-> this returns -1 -> if value is -ve
                    // -> 1 if value is positive
                    // - > 0 if value is null 


//Math.pow(x,y) -> indicates x to the power y 
console.log(Math.pow(2,3));
// Math.sqrt(x)-> returns square root of a number 
console.log(Math.sqrt(8));
//Math.abs(-x)-> returns absolute value of given number
console.log(Math.abs(-25.677));
//Math.sin() and Math.cos() 

//Math.random() - > important in gaming 
randNum = Math.random();
rNum = randNum*10;
wNum = Math.floor(rNum); console.log(wNum);


//Js Conditional Statement 

/* 
if (true) {
    console.log('hello world')
}
for loop syntax - > for(let i = 0; i < cars.length ; i++) {
    //code
}
*/
// Set in javaScript
const Noodles = new Set(['Wai Wai','Preeti','Rum Pum ','Rara','Ramba','2pm']);

Noodles.add('Jhilke');
console.log(Noodles.size)
Noodles.delete('2pm')
Noodles.delete('Wai Wai')
Noodles.delete('Rara')

console.log(Noodles)
// javascript this keyword 
//this refers to the object it belongs to 
//different values /meanning of this 

//this in a method 
//-> it refers to the owner of the method 

const Book = {
    BookName : "Palparsa Cafe",
    Author : "Narayan Wagle",
    Price : 250,
    bookTitle: function(){
        return this.BookName +" By " + this.Author; 
    }
};

console.log(Book.bookTitle());

//this Alone

//-> when used alone the owner is the global object 
let c = this;
// console.log(c);
//


//js Arrow Function
function add(val1,val2) {
    return val1+val2;
}
console.log(add(2,3));

 let hello = (a,b) => a+b;
 console.log(hello(2,6));
 //in arrow function this always represents the object that define the arrow function 

class Kitab{
    constructor(name,author,price){
        this.name = name;
        this.author = author;
        this.price = price;
    }
}
let obj1 = new Kitab('Basai','Lila Bahadur Chhetri',520);
let obj2 = new Kitab('Karnali Blues','Buddhi Sagar',720);
console.log(obj1.name,obj1.author,obj1.price);
console.log(obj2);



//js JSON

//JSON -> javascript Object Notation
//JSON is a format for storing and transporting data
//Json is often used when data is sent from server to a web page

//Json Syntax rule 
/*
-> Data is name/value Pairs
-> data is seperated by commas,
-> curly braces hold the objects,
-> Square Bracket holds arrays,
-> Json names requires double quotes where Js names do not


json objects -> {"firstName":"Sharad","lastName":"Bhandari"},

Json Array -> "employees":[
    {"Name":"value","Name","value"},
    {"Name":"value","Name","value"},
    {"Name":"value","Name","value"}
]

*/
//HTMl Is a standard for how to get ,change,add,or delete HTML elements 

//DOM methods -> actions perform on Html elements 
//DOM Properties -> values that you can set or change
//eg: getElementById is a method and innerHTML is a property.
//
//document object is the owner of all other object 
//how you can use document object to access and manipulate HTML
//Finding HTML Elements
//-> document.getElementById(id)
//-> document.getElementByTagName(name)
//->document.getElementByClassName(class)

//Changing HTML Elements 
/*
PROPERTY
element.innerHTML = new html content
element.attribute = new value
element.style.property = new style
METHOD
element.setAttribute(attribute,value)-> change the attribute value of an HTML element

//Adding and deleting elements 
document.createElement(element)
document.removeChild(element)
document.appendChild(element)
document.replaceChild(new,old)
document.write(text)


*/
let userForm = document.forms["inform"];
let firstValue = userForm["username"].value;
console.log(firstValue);

for (let i =0;i<userForm.length;i++){
    // console.log(userForm.elements[i].type);
}
//HTML DOM
/*
Changing HTML content 
use .innerHTML for this 

We can change Value of an attribute in html

document.getElementById(id).attribute = new Value;



//////////////DOM-FORMS////////////////
js form validation ->




*/
let testBtn = document.getElementById("testbtn");
testBtn.addEventListener("click",()=>{testBtn.value="you clicked the btn"})

function moveFunction(){
    let id = null;
    const elem = document.getElementById("anim");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame,2);
    function frame() {
        if (pos == 400) {
            clearInterval(id);
        }else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
moveFunction()
//element.addEventListener(event,function,useCapture);

//DOM Nodes -> Parent Nodes,
//Navigation between nodes -parentNode,-childNodes[nodenumber],firstchild,lastchild,nextsibling,previoussibling


////////////JS Objects////////////
/*
js getters and setters 


*/
///////////Function Expression //////////
/*js function can also be defined using an expression ,and can be stroed in a variale.
const x = function(a,b) {return a*b};
const y = () => a*b;
in js function are defined using function keyword 
function function_name(parameters) {
    //block of code 
    //return something
}
we can invoke function by calling them.....



*/
function division( val1,val2=1) {
    let resultval = val1/val2;
    return resultval;
}
const fresult = division(125);
// console.log(fresult)

const fex = function (a,b){return a*b};
// console.log(fex);
/////self Invoking Function////////
(
    function (){
        // document.getElementById("selfi").innerHTML = "I am self Invoked function! "
    }
)();

//Async js 
/**
  a callback function is passed as an argument to another function ,
  this technique allows a function to call another function,
  a callback function can run after another function has finished 
 */
function Intro(somevar) {
    // document.getElementById('selfi').innerHTML = somevar;
}

function Greet(name) {
    let greet = `Good Morning ${name},Have a Great Day`;
    Intro(greet);
}

///////////AJAX//////////////////
/*
AJAX is not a programming language,
ajax is a technique for accessing web servers from a web page .
AJAX -> stands for Ashynchronous Javascript and XML.


AJAX -The XMLHttpRequest Object-> The key stone of AJAX
->Create an XMLHttpRequest object
->Define a callback function 
->open the XMLHttpRequest object
->Send a Request to a server

////////////XMLHttpRequest object ///////////////
it can be used to exchange data with a web server behind the scenes .it is possible to update parts of a web page without reloading the whole page .
Syntax for creating XMLHttpRequest object -> 
 ......................................
 .   variable = new XMLHttpRequest(); .
 ......................................

 Define a callback function 
 -> callback function passed in to another function as a parameter ,and excuted latter.
 -----xhttp.onload = function (){

 }

 Send a Request
 -> To send a request to a server ,you can use the open() and send() methods of XMLRequest object.
xhttp.open("GET","ajax_info.txt")
xhttp.send()
*/

// let ajaxBtn = document.getElementById("ajaxbtn");
// ajaxBtn.addEventListener("click",LoadDoc())

// function LoadDoc(){
//     let xhttp = new XMLHttpRequest();
//     xhttp.onload =function() {
//         document.getElementById('#field').innerHTML = this.responseText;
//     }
//     xhttp.open("GET","ajax_info.txt");
//     xhttp.send();
// }
//XMLHttpRequest Object Methods -> 1) new XMLHttpRequest()
                            //    -> abort() cancels the current request
                            //-> send() send request to the server
                            //->open(method,url,async,user,psw)
                            // -> send(string) sends the request to the server used for post requests 
                            //-> getAllResponseHeaders()-returns header information
                            //->getResponseHeader()-> Returns specific header information 


//XMLHttpRequest Object Properties -> //onload  = defines a function to be called when the request is received(loaded)
                                    //onreadystatechange 
                                    //readystate -> holds the status of the xmlhttprequest
                                    //
//Callback Function-> it is a function which is passed as parameter in another function to execute latter.
/**
 when we pass callback function to another function we just pass the reference of the function ,
 */

/////PROMISE
/**
 constructor syntax for promise object 
 let promise = new Promise(function(resolve,reject){
     //executor (the producing code ,"singer")
 })
 */
// let myPromise = new Promise(function(myResolve,myReject){
//     myResolve();
//     myReject();
// });
// myPromise.then(
//     function(value) {/*code for success*/},
//     function(error) {/* code for reject */}
// );

function myFunction(param) {
    document.getElementById("field").innerHTML = param;
}

let myPromise = new Promise(function(myResolve,myReject){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET','file.txt');
    xhttp.onload = function(){
        if (xhttp.status==200) {
            myResolve(xhttp.response);
        } else {
            myReject("File not Found");
        }
    };
    xhttp.send();
});
myPromise.then(
    function(value) {myFunction(value);},
    function(error) {myFunction(error);}
);
//Async/await is the extension of Promises 

