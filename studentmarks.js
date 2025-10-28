function grade() {
    var T = document.getElementById("T").value;
    var H =document.getElementById("H").value;
    var E = document.getElementById("E").value;
    var M =document.getElementById("M").value;
    var S = document.getElementById("S").value;
    var SS = document.getElementById("SS").value;
    if (T == '') {
        alert("enter the telugu marks");
    }
    if (H == '') {
        alert("enter the hindi marks");
    }
    if (E == '') {
        alert("enter the english marks");
    }
    if (M == '') {
        alert("enter the maths marks");
    }
    if (S == '') {
        alert("enter the science marks");
    }
    if (SS == '') {
        alert("enter the social marks");
    }
    var total = parseInt(T) + parseInt(H) + parseInt(E) + parseInt(M) + parseInt(S) + parseInt(SS);
    document.getElementById("total").value = total;

    if (total >= 600) {
        document.getElementById("GD").value = "O grade";
    }
    else if (total >= 500) {
        document.getElementById("GD").value = "A+ grade";
    }
    else if (total >= 400) {
        document.getElementById("GD").value = "B grade";
    }
    else if (total >= 300) {
        document.getElementById("GD").value = "C grade";
    }
    else {
        document.getElementById("GD").value = "fail";
    }
}

function addition() {
    var T = parseInt(document.getElementById("T").value);
    var H = parseInt(document.getElementById("H").value);
    var E = parseInt(document.getElementById("E").value);
    var M = parseInt(document.getElementById("M").value);
    var S = parseInt(document.getElementById("S").value);
    var SS = parseInt(document.getElementById("SS").value);
    document.getElementById("total").value = T+H+E+M+S+SS;
}
function grade1(){
    var total=document.getElementById("total").value;
    if(total = 600){
        document.getElementById("GD").innerHTML = "O grade"
    } else if (total >= 500) {
        document.getElementById("GD").value = "A+ grade";
    }
    else if (total >= 400) {
        document.getElementById("GD").value = "B grade";
    }
    else if (total >= 300) {
        document.getElementById("GD").value = "C grade";
    }
    else {
        document.getElementById("GD").value = "fail";
    }
}