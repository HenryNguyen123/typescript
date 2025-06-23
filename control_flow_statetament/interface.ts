
interface IPerson {
    firstName: string
    lastName: string
}


let getFullName = (person: IPerson): string => {
    return `fullName: ${person.firstName} ${person.lastName}`
}