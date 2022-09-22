function talk(){
    var know = {
        "hello" : "Hello, I'm Harris, your personal assistant, how may i help you! ",
        "How are you" : "Good :)",
        "help" : "Please Give us A Follow & Like.",
        "Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
        "ok" : "Thank You So Much ",
        "Bye" : "Okay! Will meet soon.."};
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
        }
    else{
        document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
}