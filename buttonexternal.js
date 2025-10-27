function agecal(){
    let age = document.getElementById("age").value;
    alert("checking vote elgiblity");

    if (age >= 18) {
        document.getElementById("vote").innerHTML = "age "+age+" Eligible for Vote";

    }
    else {
        document.getElementById("vote").innerHTML = "age "+age+" Not Eligible for Vote";
    }
}