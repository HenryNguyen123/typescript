//  union đồng nghĩa với join

const addNumberOrString = (a: number | string, b: number | string) => {
    if(typeof a === "number" && typeof b === 'number') {
        return a + b
    }

    if(typeof a === "string" && typeof b === 'string') {
        return a.concat(b)
    }

    throw new Error('parameters must  be number or string')
}

console.log("check ::: ", addNumberOrString("12", "van"))