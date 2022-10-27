function addTen1(num){
    return num + 10
}

function addTen(num:number){
    return num + 10
}

function addTen(num:number):number{
    //return 'hello' //wrong way
    return num+10
}

function signUpUser(name:string,email:string,password:string,isPremium:boolean=false){
    return 'signed up successfully'
}

addTen(10)
signUpUser('psp','psp@psp.com','asaasa')