const firebaseConfig = {
      apiKey: "AIzaSyD4O_W8aswuPuPMrxmid74Gj8OkQSqBNhU",
      authDomain: "kwitter-29019.firebaseapp.com",
      databaseURL: "https://kwitter-29019-default-rtdb.firebaseio.com",
      projectId: "kwitter-29019",
      storageBucket: "kwitter-29019.appspot.com",
      messagingSenderId: "876423312901",
      appId: "1:876423312901:web:0f973bd0168024b03b0e6c"
    };

    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name= localStorage.getItem("user_name");
     room_name= localStorage.getItem("room_name");

     function send(){
           msg= document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
                 name: user_name,
                 message: msg,
                 like:0
           });

           document.getElementById("msg").value="";
     }




function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}