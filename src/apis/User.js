const Login=({email,password})=>{
    console.log('logging in',email,password);
    return new Promise((res)=>{
        setTimeout(()=>{
            res({
                email:email,
                name:'dummy'
            })
        },3000)
    })
}

const SignUp=({email,password})=>{
    console.log('signing up',email,password);
    return new Promise((res)=>{
        setTimeout(()=>{
            res({
                email:email,
                name:'dummy'
            })
        },3000)
    })
}

export {
    Login,
    SignUp
}