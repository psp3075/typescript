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

const getHello = (s:string):string =>{
    return "hello"
}

const heros = ["thor","superman","black panther"]

heros.map(hero => "hero is ${hero}") //context switching automatic

function logError(err:string):void{
    console.log(err) //void is used as nothing is returned
}

function handleError(err:string):never{
    throw new Error(err)
}

