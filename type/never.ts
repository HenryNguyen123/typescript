const handleException = (errorMessage: string): never => {
    throw Error(errorMessage)
}

const runInfinty = (): never =>{
    while(true) {
        console.log('runing .....')
    }
}
// handleException('loi xac thuc')
runInfinty()

// sử dụng never để không trả ra kết quả nào cả