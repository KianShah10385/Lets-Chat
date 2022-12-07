// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBNgHhAAWnRJ3Fh9l3ZdVoiFmXeHTarqF8",
    authDomain: "lets-chat-3970d.firebaseapp.com",
    databaseURL: "https://lets-chat-3970d-default-rtdb.firebaseio.com",
    projectId: "lets-chat-3970d",
    storageBucket: "lets-chat-3970d.appspot.com",
    messagingSenderId: "675293199850",
    appId: "1:675293199850:web:01d4d252566d0fbde04693",
    measurementId: "G-F5DFVGG03K"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}



