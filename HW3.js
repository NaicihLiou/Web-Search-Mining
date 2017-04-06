// Create a reference with an initial file path and name
var storage = firebase.storage();
var storageRef = firebase.storage().ref('test/');

/*
storageRef.child('cat1.png').getDownloadURL().then(function(url) {  
  // Or inserted into an <img> element:
  var img1 = document.getElementById('cat1');
  img1.src = url;
}).catch(function(error) {
});

storageRef.child('cat2.jpg').getDownloadURL().then(function(url) {  
  // Or inserted into an <img> element:
  var img1 = document.getElementById('cat2');
  img1.src = url;
}).catch(function(error) {
});

storageRef.child('cat3.jpg').getDownloadURL().then(function(url) {  
  // Or inserted into an <img> element:
  var img2 = document.getElementById('cat3');
  img2.src = url;
}).catch(function(error) {
});




function scrollw() {
    window.scrollTo(0, 0);
}

function toSamll() {
    var x = document.getElementsByClassName("all");
    x[0].style.fontSize = "10px";
}

function toMedium() {
    var x = document.getElementsByClassName("all");
    x[0].style.fontSize = "15px";
}

function toLarge() {
    var x = document.getElementsByClassName("all");
    x[0].style.fontSize = "20px";
}


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////  goole sign in ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var provider = new firebase.auth.GoogleAuthProvider();
function glSignIn(){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log('Google Sign in!');
    document.getElementById('gl-sign-in').textContent = 'Google SignOut';
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  });
}

*/

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////    留言板    ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
console.log(storage);

function send(){
  console.log('send');
  var storageRef = firebase.storage().ref('test/');
  var time = new Date();
  var afuRef = storageRef.child(''+time.getTime()+'.txt');
  console.log(document.getElementById('sendTxt').val);
  var value = document.getElementById('sendTxt').value;
  afuRef.putString(value).then(function(snapshot) {    
    console.log('Uploaded a raw string!');
  });
}
