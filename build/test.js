"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let num = 5;
let str = "Hello Akib";
let bol = true;
console.log(`number is : ${num} string is : ${str} , boleen is : ${bol}`);
//learn array
let data = ["akib", "aman", "amil"];
console.log("array output", data);
let user = {
    name: "Akib",
    age: 20,
    address: 10
};
console.log("ist user", user);
//iinde example of object
let iindUser = {
    name: "Akib",
    age: 20,
    address: "Mohalla Quazi Aliganj Etah"
};
console.log("iind user of user", iindUser);
// union  =  multiple data type ke liye
let myuser = 10;
console.log("check union", myuser);
function Sum() {
    return 5 + 3;
}
let output = Sum();
console.log("sum of two number ", output);
// iind function iind method
function Minus(a, b) {
    return a - b;
}
let minusResponse = Minus(20, 5);
console.log("minus result", minusResponse);
//learn class
class Test {
    constructor() {
        this.name = "Akib Ali";
    }
    getName() {
        console.log(this.name, "learn class");
    }
}
let a1 = new Test();
a1.getName();
// learn class with constructer
class TestClass {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log("learn class with constructer", this.name);
    }
}
let a2 = new TestClass("akib ali");
a2.getName();
//lern inheritence
class Parent {
    constructor() {
        this.name = "";
    }
    setName(name) {
        return this.name = name;
    }
}
class Child extends Parent {
    receiveName() {
        return this.name;
    }
}
let output3 = new Child();
output3.setName("peter is here");
console.log("output inheritence", output3.receiveName());
// module
const Student_1 = __importDefault(require("./Student"));
const teacher_1 = __importDefault(require("./teacher"));
console.log("student Login here", (0, Student_1.default)());
console.log("Teacher Login here", (0, teacher_1.default)());
// generics
function users(data) {
    return data;
}
console.log((users("akib")));
console.log("age", users(35));
console.log("full info", users({ name: "Akib", age: "30", address: "Mohall Quazi Aliganj Etah" }));
//tuple 
// एक ट्यूपल जिसमें एक स्ट्रिंग और एक नंबर होता है
let myTuple;
// ट्यूपल को वैल्यूज़ असाइन करना
myTuple = ["Hello", 42]; // यह सही है
// गलत उदाहरण
// myTuple = [42, "Hello"]; // त्रुटि होगी क्योंकि क्रम सही नहीं है
// myTuple = ["Hello"]; // त्रुटि होगी क्योंकि संख्या कम है
//tuple iind example 
let myTupleIInd = ["Hello", 3];
console.log("iind tuple example", myTupleIInd);
//literal
let direction;
direction = "north"; // सही
direction = "south"; // सही
let data1 = {
    name: "Akib",
    age: 20,
    email: "akib7599@gmail.com"
};
console.log("read alias example 1 ", data1);
let data2 = {
    name: "Amil",
    age: 25,
    email: "amil@gmail.com"
};
console.log("read alias example 2", data2);
//function type
function calculater() {
    return 5 + 6;
}
calculater();
//void
function cal() {
    console.log("learn void example", 5 + 2);
}
cal();
//void iind example 
function great() {
    console.log("hello  learn iind example function");
}
great();
// learn unknown 
let randomValue;
randomValue = "Hello";
console.log(randomValue.toUpperCase()); // सही, लेकिन टाइप-सुरक्षा नहीं है
let safeValue;
safeValue = "Hello";
//  console.log(safeValue.toUpperCase()); // त्रुटि: `safeValue` पर सीधे ऑपरेशन नहीं कर सकते
// iind example unknown
function processInput(input) {
    if (typeof input === "string") {
        console.log(`Input is a string: ${input}`);
    }
    else if (typeof input === "number") {
        console.log(`Input is a number: ${input}`);
    }
    else {
        console.log("Input is of an unknown type");
    }
}
processInput("Test"); // Output: Input is a string: Test
processInput(123); // Output: Input is a number: 123
processInput(true); // Output: Input is of an unknown type
//   never type
// function throwError(message: string): never {
//     throw new Error(message);
// }
// throwError("server error")
// how to complile multiple file
//   **********************  tsc --watch ya tsc -w   *****************************  //
// *********************** how to create tsconfig.json file     *********************//
//** tsc -init                   **//
