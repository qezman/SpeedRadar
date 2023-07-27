import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBlMuxqSNO-GdK6u8kQf7gDLr-NP-nqVu0",
    authDomain: "terrestrial-speed-radar.firebaseapp.com",
    projectId: "terrestrial-speed-radar",
    storageBucket: "terrestrial-speed-radar.appspot.com",
    messagingSenderId: "632378755153",
    appId: "1:632378755153:web:69503aceacc4406fdf1070",
    measurementId: "G-Q10NKMHCXT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const database = getDatabase(app);