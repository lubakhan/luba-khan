// let users = [];
// const STORAGE_USERS = 'Users';


// function signUp() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     const id = users[users.length - 1].id + 1;
//     const user = {
//         name: name,
//         email: email,
//         password: password
//     }
//     users.push(user);
// }
// localStorage.setItem(STORAGE_USERS,JSON.stringify(users));
// alert('signup successful!');
// console.log(users);
// window.onload = () => {
//     if (localStorage.getItem(STORAGE_USERS)) {
//         users = JSON.parse(localStorage.getItem(STORAGE_USERS));
//     }
// };

let users = [];
const STORAGE_USERS = 'Users';


window.onload = () => {
    if (localStorage.getItem(STORAGE_USERS)) {
        users = JSON.parse(localStorage.getItem(STORAGE_USERS));
    }
};


function signUp() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    const checkUser = users.find(user => user.email === email);
    if (checkUser) {
        alert("This email is already registered!");
        return;
    }

   
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const user = {
        id: id,
        name: name,
        email: email,    
        password: btoa(password)
    };

    
    users.push(user);

    
    localStorage.setItem(STORAGE_USERS, JSON.stringify(users));

    alert('Signup successful! You can now Sign In.');
    console.log(users);

    
    window.location.href = "signin.html";
}

function signIn() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    if (email === "" || password === "") {
        alert("Please enter both email and password!");
        return;
    }


    const usersData = JSON.parse(localStorage.getItem(STORAGE_USERS)) || [];

    
    const matchedUser = usersData.find(user => user.email === email && atob(user.password) === password);

    if (matchedUser) {
        alert("Login successful!");
        localStorage.setItem('LoggedInUser', JSON.stringify(matchedUser));
        window.location.href = "home.html"; 
    } else {
        alert("Invalid email or password!");
    }
}



