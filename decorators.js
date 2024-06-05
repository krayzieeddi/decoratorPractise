"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decoratorsSimpleLogger_1 = __importDefault(require("./decoratorsSimpleLogger"));
function LogMethod(target, propertyKey, descriptor) {
    console.log("Method used: " + propertyKey);
}
function MyReadOnly(target, propertyKey, descriptor) {
    console.log("Read only: " + propertyKey);
}
let MyTest = class MyTest {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        console.log(this.name);
    }
    getAge() {
        console.log(this.age);
    }
};
__decorate([
    LogMethod
], MyTest.prototype, "getName", null);
__decorate([
    MyReadOnly
], MyTest.prototype, "getAge", null);
MyTest = __decorate([
    decoratorsSimpleLogger_1.default
], MyTest);
const testClass = new MyTest("ed", 30);
testClass.getName();
testClass.getAge();
