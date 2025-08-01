// app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// ✅ ADD this line:
export { app }; // <- export initialized app for use in map page

const firebaseConfig = {
  apiKey: "AIzaSyCZNW0Oy75PzsvaP_25YZFSkyCpLmOjL7M",
  authDomain: "trackmybus-907b4.firebaseapp.com",
  projectId: "trackmybus-907b4",
  storageBucket: "trackmybus-907b4.appspot.com",
  messagingSenderId: "497112520163",
  appId: "1:497112520163:web:1cb3d59d912c16114dbcd6",
  measurementId: "G-DB40P77VFD",
  databaseURL: "https://trackmybus-907b4-default-rtdb.firebaseio.com/" // ✅ ADD THIS LINE
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Keep your existing login/signup logic unchanged...


// Signup button click
document.getElementById("signup").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup successful!");
      window.location.href = "home.html";
    })
    .catch(err => alert("Signup failed: " + err.message));
});

// Login button click
document.getElementById("login").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful!");
      window.location.href = "home.html";
    })
    .catch(err => alert("Login failed: " + err.message));
});
