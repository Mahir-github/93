

  var firebaseConfig = {
    apiKey: "AIzaSyB6SuOpjUM9wcmcePBb_iKiqqfc0Zb7fyo",
    authDomain: "kiwtter-29bfb.firebaseapp.com",
    databaseURL: "https://kiwtter-29bfb-default-rtdb.firebaseio.com",
    projectId: "kiwtter-29bfb",
    storageBucket: "kiwtter-29bfb.appspot.com",
    messagingSenderId: "659424207679",
    appId: "1:659424207679:web:9a1006f3e092555127698a"
  };

  firebase.initializeApp(firebaseConfig);
    
    firebase.initializeApp(firebaseConfig);
      User_name = localStorage.getItem("user_name")
      document.getElementById("user_name").innerHTML = "Welcome " + User_name + "!";

    function addRoom() {
      Room_name = document.getElementById("room_name").value;
      console.log(Room_name)
      firebase.database().ref("/").child(Room_name).update({
        purpose : "Adding Room Name"
        
      });
      localStorage.setItem("room_name", Room_name)
     
    }

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      });});}
getData();
