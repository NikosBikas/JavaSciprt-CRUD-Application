function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == null || username == "") {
        alert("Please enter the username.");
    return false;
    }
    if (password == null || password == "") {
        alert("Please enter the password.");
    return false;
    }
    if (username != 'admin' || password != 'admin') {
        alert("Wrong Username or Password");
    return false;
    }
    if (username == 'admin' && password == 'admin') {
    alert('Login successful');
    window.location.replace("Summary.html");
    } 
}