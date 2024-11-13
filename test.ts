let num:number = 5;
let str : string = "Hello Akib"
let bol : boolean = true

console.log(`number is : ${num} string is : ${str} , boleen is : ${bol}`)


//learn array

let data : string[] = ["akib" , "aman" , "amil"]

console.log("array output" , data)


//learn object with interface = interface ka use object and class ke sath data type define ke liye

interface userType{
    name : string,
    age:number,
    address:any
}

let user : userType ={
    name : "Akib",
    age:20,
    address: 10
}

console.log("ist user" , user)

//iinde example of object

let iindUser : any ={
    name : "Akib",
    age:20,
    address : "Mohalla Quazi Aliganj Etah"
}

console.log("iind user of user" , iindUser)



// union  =  multiple data type ke liye

let myuser : string | number = 10
console.log("check union" , myuser)



function Sum():number{
    return 5+3;

}

let output = Sum()

console.log("sum of two number " , output)

// iind function iind method

function Minus(a:number, b:number): number{
    return a-b;


}

let minusResponse = Minus(20,5)
console.log("minus result" , minusResponse)




//learn class

class Test{
    name = "Akib Ali"
    getName(){
        console.log(this.name , "learn class")
    }
}

let a1 = new Test()
a1.getName();


// learn class with constructer

class TestClass{
    name: string;
    constructor(name:string){
        this.name = name
    }

    getName(){
        console.log("learn class with constructer" , this.name)
    }
 
}

let a2  = new TestClass("akib ali")
a2.getName()


//lern inheritence

class Parent{
    name = "";
    setName(name:any){
        return this.name = name
    }
}

class Child extends Parent{
    receiveName(){
        return this.name
    }
}

let output3 = new Child()
output3.setName("peter is here")

console.log("output inheritence", output3.receiveName())


// module

import sLogin from "./Student"
import tLogin from "./Teacher"

console.log("student Login here" , sLogin())
console.log("Teacher Login here" , tLogin())

// generics

function users <T>(data: T):T{

    return data
}

console.log((users("akib")))
console.log("age" , users(35))
console.log("full info" , users({name: "Akib" , age:"30", address: "Mohall Quazi Aliganj Etah"}))



//tuple 

// एक ट्यूपल जिसमें एक स्ट्रिंग और एक नंबर होता है
let myTuple: [string, number];

// ट्यूपल को वैल्यूज़ असाइन करना
myTuple = ["Hello", 42]; // यह सही है

// गलत उदाहरण
// myTuple = [42, "Hello"]; // त्रुटि होगी क्योंकि क्रम सही नहीं है
// myTuple = ["Hello"]; // त्रुटि होगी क्योंकि संख्या कम है



//tuple iind example 

let myTupleIInd  : [string , number] = ["Hello", 3]

console.log("iind tuple example" , myTupleIInd)


//literal

let direction: "north" | "south" | "east" | "west";
direction = "north"; // सही
direction = "south"; // सही
// sdirection = "up"; // त्रुटि होगी क्योंकि "up" स्वीकार्य नहीं है



//type Alias

type User={
    name :string,
    age: number,
    email: string,
}

let data1 : User ={
    name: "Akib",
    age:20,
    email:"akib7599@gmail.com"

}
console.log("read alias example 1 " , data1)


let data2 : User ={
    name: "Amil",
    age:25,
    email:"amil@gmail.com"

}
console.log("read alias example 2" , data2)



//function type

function calculater(){
    return 5+6
}

calculater()


//void

function cal(){
    console.log("learn void example" , 5+2)
}

cal()

//void iind example 

function great():void{
    console.log("hello  learn iind example function",)
}

great()


// learn unknown 

let randomValue: any;
randomValue = "Hello";
console.log(randomValue.toUpperCase()); // सही, लेकिन टाइप-सुरक्षा नहीं है

let safeValue: unknown;
safeValue = "Hello";
//  console.log(safeValue.toUpperCase()); // त्रुटि: `safeValue` पर सीधे ऑपरेशन नहीं कर सकते


// iind example unknown

function processInput(input: unknown) {
    if (typeof input === "string") {
      console.log(`Input is a string: ${input}`);
    } else if (typeof input === "number") {
      console.log(`Input is a number: ${input}`);
    } else {
      console.log("Input is of an unknown type",);
    }
  }
  
  processInput("Test"); // Output: Input is a string: Test
  processInput(123);    // Output: Input is a number: 123
  processInput(true);   // Output: Input is of an unknown type



//   never type

// function throwError(message: string): never {
//     throw new Error(message);
// }

// throwError("server error")
  
