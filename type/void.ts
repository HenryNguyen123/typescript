const sum = (a: number, b: number):number => {
    return a+b
}

const handleLog= (msg: string): void => {
    console.log('checK ', msg)
}

handleLog("user")

// sử dụng void để không phải trả về giá trị nào cả, câu lệnh chỉ thực thi logic trong hanlde của nó thôi