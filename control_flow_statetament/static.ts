class Person4 {
    static age: number
    static firstName: string
    static lastName: string

    // constructor(firstName: string, lastName: string) {
    //     this.firstName = firstName
    // }
    static callName(firstName: string, lastName: string): string {
        this.firstName = firstName
        this.lastName = lastName
        return `FullName: ${this.firstName} ${this.lastName}`
    }

}

console.log("call >>> ", Person4.callName("toan", "nguyen"))

