class Person2 {
    public age: number
    public firstName: string
    public lastName: string

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
}
let person = new Person2(12, "nhan", "nguyen")

person.setAge = 20
console.log("check person age>>> ", person.getAge)
