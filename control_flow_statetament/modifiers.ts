//public
//private
//

class Employee {
    public emCode: string
    empName: string

    constructor() {
        this.emCode = ""
        this.empName = ""
    }
}

let em = new Employee()
em.emCode = "123"
em.empName = "nguyen van a"

console.log("check >>> ", em)