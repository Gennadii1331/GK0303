import './lesson-10.scss';

const myButton = document.querySelector('#myBtn');
const myOutput = document.querySelector('#output');
const nameField = document.querySelector('#nameField');
const passwordField = document.querySelector('#passwordField');
const btnAdd = document.querySelector('#btnAdd');
const newLements = document.querySelector('#newLements');

myButton.onclick = login;
btnAdd.onclick = addElement;

function login() {
    const name = nameField.value;
    const password = passwordField.value;
    nameField.value = '';
    passwordField.value = '';

    if (name && password) {
        if (name === 'admin' && password === '111') {
            myOutput.innerHTML = `<h2>Welcome admin!</h2>`;
        } else {
            myOutput.innerHTML = `<h2>Credentials are wrong!</h2>`;
        }
    } else {
        myOutput.innerHTML = `<h3 style="color:red"> Not valid input!</h3>`;
    }
    // if (name && name !== ' ') {
    //     myOutput.innerHTML = `<h2>Hello ${name}</h2>`;
    // } else {
    //     myButton.classList.add('not-valid');
    //     myOutput.innerHTML = `<h3 style="color:red"> Not valid input!</h3>`;
    // }
}

function addElement() {
    const newElement = document.createElement('div');
    console.log(newElement);
    newElement.innerHTML = 'Hello world';
    newLements.appendChild(newElement);
}

