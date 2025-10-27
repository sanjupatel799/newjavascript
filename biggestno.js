function biggest(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    if(a < b){
        if(b < c){
            document.getElementById("big").innerHTML = c+" c value biggest";
        }
        else{
            document.getElementById("big").innerHTML = b+" b value biggest";
        }
    }
    else if(a < c){
            document.getElementById("big").innerHTML = c+" c value biggest";
    }
    else{
            document.getElementById("big").innerHTML = a+" a value biggest";
    }
}


function addition(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    document.getElementById("d").value = a+b+c;
}