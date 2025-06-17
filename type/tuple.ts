let skills: (number | string)[] = ['nguyen van a', 25]
skills.push('duong 20')
// console.log('list skils >>> ', skills)

// tuple:  cần quan tâm datatype, size, order thứ tự
let skills2: [number, string] = [40, "nguyen van a"]

let skills3: [string, number, boolean]
skills3 = ["phạm văn tùng", 12, true]

//  optional tuple element: khai báo nhưng chưa chắc truyền giá trị vào
let Arr: [string, number, number?, boolean?]
Arr = ["dao dat", 12]