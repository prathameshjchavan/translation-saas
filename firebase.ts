import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
	apiKey: "AIzaSyDVjCUpVbsl5V1TBW_sBfaak63t206qIvg",
	authDomain: "translation-saas-app-dc232.firebaseapp.com",
	projectId: "translation-saas-app-dc232",
	storageBucket: "translation-saas-app-dc232.appspot.com",
	messagingSenderId: "528077330948",
	appId: "1:528077330948:web:4051a9fcae4b5f44503351",
	measurementId: "G-J5Z97TFQC9",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
