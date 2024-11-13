"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var num = 5;
var str = "Hello Akib";
var bol = true;
console.log("number is : ".concat(num, " string is : ").concat(str, " , boleen is : ").concat(bol));
//learn array
var data = ["akib", "aman", "amil"];
console.log("array output", data);
var user = {
    name: "Akib",
    age: 20,
    address: 10
};
console.log("ist user", user);
//iinde example of object
var iindUser = {
    name: "Akib",
    age: 20,
    address: "Mohalla Quazi Aliganj Etah"
};
console.log("iind user of user", iindUser);
// union  =  multiple data type ke liye
var myuser = 10;
console.log("check union", myuser);
function Sum() {
    return 5 + 3;
}
var output = Sum();
console.log("sum of two number ", output);
// iind function iind method
function Minus(a, b) {
    return a - b;
}
var minusResponse = Minus(20, 5);
console.log("minus result", minusResponse);
//learn class
var Test = /** @class */ (function () {
    function Test() {
        this.name = "Akib Ali";
    }
    Test.prototype.getName = function () {
        console.log(this.name, "learn class");
    };
    return Test;
}());
var a1 = new Test();
a1.getName();
// learn class with constructer
var TestClass = /** @class */ (function () {
    function TestClass(name) {
        this.name = name;
    }
    TestClass.prototype.getName = function () {
        console.log("learn class with constructer", this.name);
    };
    return TestClass;
}());
var a2 = new TestClass("akib ali");
a2.getName();
//lern inheritence
var Parent = /** @class */ (function () {
    function Parent() {
        this.name = "";
    }
    Parent.prototype.setName = function (name) {
        return this.name = name;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.receiveName = function () {
        return this.name;
    };
    return Child;
}(Parent));
var output3 = new Child();
output3.setName("peter is here");
console.log("output inheritence", output3.receiveName());
// module
var Student_1 = require("./Student");
var Teacher_1 = require("./Teacher");
console.log("student Login here", (0, Student_1.default)());
console.log("Teacher Login here", (0, Teacher_1.default)());
// generics
function users(data) {
    return data;
}
console.log((users("akib")));
console.log("age", users(35));
console.log("full info", users({ name: "Akib", age: "30", address: "Mohall Quazi Aliganj Etah" }));
//tuple 
// एक ट्यूपल जिसमें एक स्ट्रिंग और एक नंबर होता है
var myTuple;
// ट्यूपल को वैल्यूज़ असाइन करना
myTuple = ["Hello", 42]; // यह सही है
// गलत उदाहरण
// myTuple = [42, "Hello"]; // त्रुटि होगी क्योंकि क्रम सही नहीं है
// myTuple = ["Hello"]; // त्रुटि होगी क्योंकि संख्या कम है
//tuple iind example 
var myTupleIInd = ["Hello", 3];
console.log("iind tuple example", myTupleIInd);
//literal
var direction;
direction = "north"; // सही
direction = "south"; // सही
var data1 = {
    name: "Akib",
    age: 20,
    email: "akib7599@gmail.com"
};
console.log("read alias example 1 ", data1);
var data2 = {
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
var randomValue;
randomValue = "Hello";
console.log(randomValue.toUpperCase()); // सही, लेकिन टाइप-सुरक्षा नहीं है
var safeValue;
safeValue = "Hello";
//  console.log(safeValue.toUpperCase()); // त्रुटि: `safeValue` पर सीधे ऑपरेशन नहीं कर सकते
// iind example unknown
function processInput(input) {
    if (typeof input === "string") {
        console.log("Input is a string: ".concat(input));
    }
    else if (typeof input === "number") {
        console.log("Input is a number: ".concat(input));
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
