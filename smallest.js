function smallest(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    if(a > b){
        if(b > c){
            document.getElementById("small").innerHTML = c+" c value smallest";
        }
        else{
            document.getElementById("small").innerHTML = b+" b value smallest";
        }
    }
    else if(a > c){
            document.getElementById("small").innerHTML = c+" c value smallest";
    }
    else{
            document.getElementById("small").innerHTML = a+" a value smallest";
    }
}


function addition(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    document.getElementById("d").value = a+b+c;
}