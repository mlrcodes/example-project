import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";

console.log("AAA");

const firebaseConfig = {
    apiKey: "AIzaSyDFX_XFh9Kzh6ar4K-J60Dq9sN7l0JqaTM",
    authDomain: "example-project-09f62.firebaseapp.com",
    projectId: "example-project-09f62",
    storageBucket: "example-project-09f62.appspot.com",
    messagingSenderId: "379823714154",
    appId: "1:379823714154:web:75df16068445165bddbf13"
};

const app = initializeApp(firebaseConfig),
  functions = getFunctions(app),
  addMessage = httpsCallable(functions, 'addMessage');

const d = document,
  messageForm = d.querySelector('.message-form'),
  resultMessage = d.querySelector('.result-message');
 
console.log("AAA")
  
  // Manejar envío de formulario
d.addEventListener('submit', e => {
    e.preventDefault();

    console.log(e.target === messageForm)

    if (e.target === messageForm) {
      const message = messageForm.message.value;

      addMessage({text: message})
      .then(res => {
        console.log(res)
        resultMessage.innerText = 'Mensaje enviado!';
      }).catch((error) => {
        console.log(error)
        resultMessage.innerText = 'Error al enviar el mensaje';
      });      
    }
});
  