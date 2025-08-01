import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCZNW0Oy75PzsvaP_25YZFSkyCpLmOjL7M",
  authDomain: "trackmybus-907b4.firebaseapp.com",
  projectId: "trackmybus-907b4",
  storageBucket: "trackmybus-907b4.appspot.com",
  messagingSenderId: "497112520163",
  appId: "1:497112520163:web:1cb3d59d912c16114dbcd6",
  databaseURL: "https://trackmybus-907b4-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const shareBtn = document.getElementById('shareLocation');
const busSelect = document.getElementById('busSelect');

shareBtn.addEventListener('click', () => {
  const selectedBus = busSelect.value;

  if (!selectedBus) {
    alert('Please select a bus first!');
    return;
  }

  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
    return;
  }

  shareBtn.disabled = true;  // Disable button while sharing
  shareBtn.textContent = "Sharing Location...";

  navigator.geolocation.watchPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      set(ref(db, 'buses/' + selectedBus), {
        latitude: lat,
        longitude: lon,
        timestamp: Date.now()
      })
      .then(() => {
        console.log(`Location updated: ${lat}, ${lon}`);
        if (!document.getElementById("statusMsg")) {
          const msg = document.createElement('p');
          msg.id = "statusMsg";
          msg.textContent = "✅ Location is now being shared live.";
          msg.style.color = "#2e7d32";
          msg.style.marginTop = "1.5rem";
          msg.style.fontWeight = "500";
          shareBtn.insertAdjacentElement("afterend", msg);
        }
      })
      .catch((error) => {
        alert("Failed to update location: " + error.message);
        shareBtn.disabled = false;
        shareBtn.textContent = "Share Location";
      });
    },
    (error) => {
      alert("Error getting location: " + error.message);
      shareBtn.disabled = false;
      shareBtn.textContent = "Share Location";
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 10000
    }
  );
});
