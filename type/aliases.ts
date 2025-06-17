type typeOne =  number | string | object
type typeTwo =  number | string

const handleAddABC= (a: typeOne, b: number | string) => {
    if(typeof a === "number" && typeof b === 'number') {
        return a + b
    }

    if(typeof a === "string" && typeof b === 'string') {
        return a.concat(b)
    }

    throw new Error('parameters must  be number or string')
}

console.log("check ::: ", handleAddABC("12", "van"))