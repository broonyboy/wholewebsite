// Initialize Firebase
var config = {
    apiKey: "AIzaSyDA-q-Ukm79T5Z7_gTajfi7kCRqU554m1c",
    authDomain: "contact-form-f393b.firebaseapp.com",
    databaseURL: "https://contact-form-f393b.firebaseio.com",
    projectId: "contact-form-f393b",
    storageBucket: "contact-form-f393b.appspot.com",
    messagingSenderId: "753869179132"
  };
  firebase.initializeApp(config);

// Reference Messages Collection

var messagesRef = firebase.database().ref('messages');



// Listen for form submit

document.getElementById('contactForm').addEventListener('submit',submitForm);

//Submit Form

function submitForm(e){
    e.preventDefault();

    //Get Values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save Message
    saveMessage(name, company, email, phone, message);

    // Show Alert

    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';

    }, 3000)

    // Clear Form

    document.getElementById('contactForm').reset();

}

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase

function saveMessage(name,company,email,phone,message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}