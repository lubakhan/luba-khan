// let x = 5;
// let y = 2;
// let z = x + y;
// document.getElementById("demo").innerHTML = z;
// let a = 5;
// let b = 2;
// let c = a - b;
// document.getElementById("demo").innerHTML = c;
//  <script>
    // function addNumbers() {
    //   let num1 = parseFloat(document.getElementById("num1").value);
    //   let num2 = parseFloat(document.getElementById("num2").value);
    //   let sum = num1 + num2;
    //   document.getElementById("result").innerHTML = sum;
    // }
    // function addNumbers() {
    //   let a = parseFloat(document.getElementById("a").value);
    //   let b = parseFloat(document.getElementById("b").value);
    //   let sub = a - b;
    //   document.getElementById("result").innerHTML = subtract;
    // }


// let i = 10;
// let j = 20;
// let k = i - j;
// console.log(k);

// let a = 10;
// let b = 20;
// let c = a + b;
// console.log(c);

// let x = 10;
// let y = 20;
// let a = x + y;
// let b = x-y;
// let c = x*y;
// let d = x/y;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
//if / else
let num1 = 5;
if (num1 % 2==0) {
    console.log(num1 + "is even");
} else{
    console.log(num1 + "is odd");
}
// let num2= 4;
// if (num2 % 2==0) {
//     console.log(num2 + "is even");
// } else{
//     console.log(num2 + "is odd");
// }

// for(t = 2; t <=20; t+=2) {
//     console.log(t);
// }
// let l = prompt("enter number");
// let  = 5;
// if (l % 2==0) {
//     console.log(l + "is even");
// } else{
//     console.log(l + "is odd");
// }
// let = 4;
// if (k % 2==0) {
//     console.log(k + "is even");
// } else{
//     console.log(k + "is odd");
// }
//Function
function add(a, b) {
  return a + b;
}

let result = add(4, 6);
console.log("sum:"+ result);
// Loop
// let n =5
// for (let i=1; i<=10; i++){
//     console.log('${n} x${i} = ${n*i}');
// }


// for(two = 2; two <= 20; two+=2)
    
//     {
//     console.log(two );
    
// }
 //Loop 
number = 2;

for(two = 1; two <=10; two++) {
    console.log(number + "*" + two + "=" +  (number * two));
}

number =15;
for(t=1; t<=10; t++){
    console.log(number+"*"+t+"="+(number*t));
}
//Object
let product={
    name: 'laptop',
    money: '85000',
    brand: 'Dell'}
    console.log(product);
//  FUNCTION
    function khan(name, length) {
  return alphabets + lenght;
    }
// let MyFather =  ("dad", 45, "black", "yousuf")
// let MyMother = ("mom", 40, "blue", "naz")
// let MyBrother = ("Bro", 25, "yellow", "zai")
// console.log(MyFather+ );

// Array k under apna pura data store krna aik sth 
const stdData = [
    {name:"Ali",class:"7th",age:17},
    {name:"husssain",class:"9th",age:18},
    {name:"Haris",class:"10th",age:20},
];
console.log(stdData);

const bioData = [
    {name:"Harry",age:"40", color:"black",},
    {name:"Devdas",age:"35", color:"blue",},
    {name:"Shapater", age:"25", color:"yellow",},
];
console.log(bioData);


// let result = khan(alphabets, lenght);
// console.log("alphabets"+ result);

//Function
function khan(school) {
console.log(school.length);
}

khan("leadership");


// function countAlphabets(name) {
//   console.log(name.length);
// }
// countAlphabets("khan");

function story(princes){
    console.log(princes.length);
}
story("poetry");

 // js Datetime
let currentDate = new Date();
console.log (currentDate);

// let today = new Date();
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log("Today is:", days[today.getDay()], today.toDateString());
 
// let today = cuurentDate();
//   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   let day = days[today.getDay()];
//   console.log(currentDate+day);
  

// Arrays
let Numbers =[0,1,2,3,4,6];
console.log(Numbers[1]);
console.log(Numbers.length);

// let fruit= ["kivi","pear","strawberry","blueberry"];
// console.log(fruits[2]);
// console.log(fruits.length);

//push (add in last)
let fruits = ["Apple", "Banana", "Mango"];
  fruits.push("Orange"); 
  console.log(fruits);
//   document.write("push():"+ fruits);

//pop ()
let numbers=[1,2,3,4,5,6,7,8,9];
  numbers.pop();
  console.log("10");
//   document.getElementById("result").innerHTML =
//     "After pop(): " + numbers;

// shift()
    let Product=["laptop","brand","prices","name"];
    Product.shift();
    console.log(Product);
 
 //unshifted 
 let vegetables=["tomato","potato","chilli","capsicum"];
  vegetables.unshift();
  console.log(vegetables);  

// Current Date and Day
let today = new Date();
document.write("Current Date: " + today.toDateString() + "<br><br>");

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = today.getDay();
document.write("Today is: " + days[currentDay]);




const sayHello = function() {
    // console.log('this', this);
    return this;
};

function sayHello2() {
    return this;
}

console.log('sayHello', sayHello());
console.log('sayHello2', sayHello2());
















/***************************** In Future ********************************/
// let hello = () => {
//     console.log("Arrow Function");
// };
// hello(); 