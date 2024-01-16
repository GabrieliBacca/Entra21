type user ={
    user: string,
    password: string
}

let registeredUser: user = {
    user: '',
    password: ''
}

function signupHandler() : void{
    const form : HTMLFormElement = document.querySelector('.signup') as HTMLFormElement
    const data = new FormData(form)

    const newUser : user ={
        user: data.get('user') as string,
        password : data.get('password') as string
    }

    registeredUser = newUser
    console.log(newUser)
}

document.querySelector('.sign')?.addEventListener('click', signupHandler)

function loginHandler() : void{
    const form : HTMLFormElement = document.querySelector('.signup') as HTMLFormElement
    const data = new FormData(form)

    if(registeredUser.user == data.get('user') && registeredUser.password == data.get('password')){
        console.log('login efetuado com sucesso')
    }else console.log('Falha no login')
    
}

document.querySelector('.login')?.addEventListener('click', loginHandler);

function changepasswordHandler() : void {
    const form : HTMLFormElement = document.querySelector('.signup') as HTMLFormElement
    const data = new FormData(form)

    registeredUser.password = data.get('password') as string;
    console.log('Nova senha cadastrada: ' + data.get('password'));
}

document.querySelector('.changePassword')?.addEventListener('click', changepasswordHandler);