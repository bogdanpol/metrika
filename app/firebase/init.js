import firebase from 'firebase/app';

/**
 * todo: inject config at build time
 */
const config = {
	apiKey: "AIzaSyBuTuRiblRJA26QOk5RCIThUhG_C64-x9k",
	authDomain: "metrika-303db.firebaseapp.com",
	databaseURL: "https://metrika-303db.firebaseio.com",
	projectId: "metrika-303db",
	storageBucket: "metrika-303db.appspot.com",
	messagingSenderId: "289425930192"
};

try {
	firebase.initializeApp(config);
} catch (err) {
	console.error("Firebase initialization error.");
}
