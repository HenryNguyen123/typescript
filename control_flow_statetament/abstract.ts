abstract class Person5 {
    public age: number
    public firstName: string
    public lastName: string

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    abstract callName(): string  //abstact method

    get getAge(): number {
        return this.age
    }
 
}

class Student2 extends Person5 {
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age)
    }

    callName(): string  {
        return `Fullname: ${this.firstName} ${this.lastName}`
    }

}

let studen3 = new Student2("van", "pham", 12)

console.log("check >>>> ", studen3.callName())