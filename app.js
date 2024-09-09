//firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAYUhXAEUjZ-qvIEA6YSvgbJZebbytOFzw",
    authDomain: "se10-nameauthmodel.firebaseapp.com",
    projectId: "se10-nameauthmodel",
    storageBucket: "se10-nameauthmodel.appspot.com",
    messagingSenderId: "492419524855",
    appId: "1:492419524855:web:22ebdefba6bb2f8ce14bf2"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//create a auth instance
const auth = firebase.auth();

//signup function
document.getElementById('loginBtn').addEventListener('click',()=>{

    //alert("test");

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert("Logged in successfully!");
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error msg : ", errorMessage)
            // ..
        });

})


//signin function
document.getElementById('signUp2').addEventListener('click',()=>{

    //alert("test signIn")

    const email = document.getElementById('email1').value;
    const password = document.getElementById('password1').value;

    alert(email,"   ", password)

    auth.createUserWithEmailAndPassword(email, password).then((userCredential)=>{
        alert("User signup successfully");
        console.log("User signup successfully");

    }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
            console.error("Error code:", errorCode, "Message:", errorMessage);
    });
});