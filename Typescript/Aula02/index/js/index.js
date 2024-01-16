"use strict";
var _a, _b, _c;
let registeredUser = {
    user: '',
    password: ''
};
function signupHandler() {
    const form = document.querySelector('.signup');
    const data = new FormData(form);
    const newUser = {
        user: data.get('user'),
        password: data.get('password')
    };
    registeredUser = newUser;
    console.log(newUser);
}
(_a = document.querySelector('.sign')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', signupHandler);
function loginHandler() {
    const form = document.querySelector('.signup');
    const data = new FormData(form);
    if (registeredUser.user == data.get('user') && registeredUser.password == data.get('password')) {
        console.log('login efetuado com sucesso');
    }
    else
        console.log('Falha no login');
}
(_b = document.querySelector('.login')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', loginHandler);
function changepasswordHandler() {
    const form = document.querySelector('.signup');
    const data = new FormData(form);
    registeredUser.password = data.get('password');
    console.log('Nova senha cadastrada: ' + data.get('password'));
}
(_c = document.querySelector('.changePassword')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', changepasswordHandler);
