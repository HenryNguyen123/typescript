class Person {
    ssn: string
    firstName: string
    lastName: string

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

let student1 =  new Person('12', 'van', 'nguyen')
console.log('student1: ', student1.getFullName())