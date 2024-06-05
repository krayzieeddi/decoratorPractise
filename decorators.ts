import SimpleLogger from "./decoratorsSimpleLogger"

function LogMethod (target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
    console.log("Method used: " + propertyKey)
}

function MyReadOnly (target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
    console.log("Read only: " + propertyKey)
}

@SimpleLogger
class MyTest {
    name:string;
    age:number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    @LogMethod
    public getName(): void {
        console.log(this.name)
    }

    @MyReadOnly
    public getAge(): void {
        console.log(this.age)
    }
 }

 const testClass = new MyTest("ed", 30);

 testClass.getName()
 testClass.getAge()
