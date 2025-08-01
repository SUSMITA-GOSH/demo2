<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCZNW0Oy75PzsvaP_25YZFSkyCpLmOjL7M",
    authDomain: "trackmybus-907b4.firebaseapp.com",
    projectId: "trackmybus-907b4",
    storageBucket: "trackmybus-907b4.firebasestorage.app",
    messagingSenderId: "497112520163",
    appId: "1:497112520163:web:1cb3d59d912c16114dbcd6",
    measurementId: "G-DB40P77VFD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>