const User ={
    name:"psp",
    email:"psp@psp.com"
}

function createUser({name:string,isPaid:boolean}){}

let newUser = {name:"psp",isPaid:false,email:"psp@psp.com"}

createUser(newUser)

createUser({name:"psp",isPaid:false,email:"psp@psp.com"}) //error


function createCourse():{name:string,price:number}{ //return type defined :
    return {name:"reactjs",price:999}
}