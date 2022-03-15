//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDz7U-YjW4b6me2OcV2O4BsyqHwiGiTpcM",
      authDomain: "kwitter-d6942.firebaseapp.com",
      databaseURL: "https://kwitter-d6942-default-rtdb.firebaseio.com",
      projectId: "kwitter-d6942",
      storageBucket: "kwitter-d6942.appspot.com",
      messagingSenderId: "837806032183",
      appId: "1:837806032183:web:96f6c25c3a7f4f90d746b2"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg= document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}