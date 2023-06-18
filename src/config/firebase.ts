import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyCCT01NRVwKYA-Yjcpsd3vHuHOckCTezbY",
	authDomain: "tiktok---jornada-85393.firebaseapp.com",
	projectId: "tiktok---jornada-85393",
	storageBucket: "tiktok---jornada-85393.appspot.com",
	messagingSenderId: "960663963841",
	appId: "1:960663963841:web:3ce1beb135784edee26c40",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
