class Person3 {
    private age: number
    private firstName: string
    private lastName: string

    constructor(age: number, firstName: string, lastName: string) {
        this.age =age
        this.firstName = firstName
        this.lastName = lastName
    }

    get getAge() {
        return this.age
    }
    set setAge(age: number){
        if (age < 0 || age > 150) {
            throw new Error ("invalid date!")
        }
        this.age = age
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    describe(): string {
        return `${this.firstName} ${this.lastName}`
    }

    toString(): string {
        return `name: ${this.firstName} ${this.lastName}, age: ${this.age}`
    }
}

class Student extends Person3 {
    public gender: string

    constructor(age: number, firstName: string, lastName: string, gender:string) {
        super(age, firstName, lastName)
        this.gender = gender
    }

    get getGender() {
        return this.gender 
    }

    toString(): string {
        return `${super.toString()}, gender: ${this.gender}`
    }

}

let studen1 = new Student(12, "thanh", "tran", "male")
console.log("check student1 >>> ", studen1.toString())
console.log("check student1 gender >>> ", studen1.getGender)
