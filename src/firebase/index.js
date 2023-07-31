import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBlMuxqSNO-GdK6u8kQf7gDLr-NP-nqVu0",
    authDomain: "terrestrial-speed-radar.firebaseapp.com",
    databaseURL: "https://terrestrial-speed-radar-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "terrestrial-speed-radar",
    storageBucket: "terrestrial-speed-radar.appspot.com",
    messagingSenderId: "632378755153",
    appId: "1:632378755153:web:69503aceacc4406fdf1070",
    measurementId: "G-Q10NKMHCXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);