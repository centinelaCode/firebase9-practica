// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { 
   getFirestore, 
   collection, 
   addDoc, 
   getDocs, 
   query, 
   where,
   onSnapshot
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDZKL7sNgu6tKN4hAWKwHUh7h19WjbBN9E",
   authDomain: "my-vocabulary-wors.firebaseapp.com",
   projectId: "my-vocabulary-wors",
   storageBucket: "my-vocabulary-wors.appspot.com",
   messagingSenderId: "977001004109",
   appId: "1:977001004109:web:2aa116b6a9f50accaff004"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// obtiene el objeto de la coneccion
const db = getFirestore();
// console.log(db);

// Funcion para agregar word a la db
export const saveWord = (wordE, wordS, wordT) => {
   // console.log(wordE, wordS);
   addDoc(collection(db, 'words'), { 
      wordEnglish: wordE, 
      wordSpanish: wordS,
      wordType: wordT
   });
}

// Función para listar wors
export const getWords = async() => getDocs(collection(db, 'words'));

export const onGetWords = (callback) => onSnapshot(collection(db, 'words'), callback);

