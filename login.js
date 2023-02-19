var attempt = 3; 
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "Disha" && password == "12345" || username == "Formget1" && password == "formget#1231") {
        alert("Login successfully");
        window.location = "quiz.html"; 
        return false;
    } else {
        attempt--; 
        alert("You have left " + attempt + " attempt;");
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}