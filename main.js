
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDnogvTgCFhODW2gve8U10jORONC3mjdA0",
    authDomain: "fir-2-29bd9.firebaseapp.com",
    projectId: "fir-2-29bd9",
    storageBucket: "fir-2-29bd9.appspot.com",
    messagingSenderId: "528751861295",
    appId: "1:528751861295:web:517c27c1b67886860630da"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('contactformmessages');

  $('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        email: $('.email').val(),
        subject: $('.subject').val(),
        message: $('.message').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});
