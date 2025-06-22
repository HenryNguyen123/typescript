//thường sử dụng trong class 
class Person1 {
    readonly birthDate: Date

    constructor( birthDate: Date) {
        this.birthDate = birthDate
    }
}

let per =  new Person1(new Date(1990, 12, 11))
per.birthDate =   new Person1(new Date(2001, 3, 4)) // compile error không thể thay đổi được giá trị nếu như là readonly