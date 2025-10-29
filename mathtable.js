function method1(){
let  a = 1;
let msg = '';
    while (a <= 10) {
        msg  = msg+"<br> your a "+a;
        a++;
    }
    document.getElementById('msg').innerHTML = msg;
}
function method2(){
    let  j = 1;
    let msg = '';
    do {
        msg  = msg+"<br> your j "+j;
        j++;
    }while (j <= 10);
    document.getElementById('msg').innerHTML = msg;
}

function method3(){
    let msg = '';
        for (let k = 1; k <= 10; k++) {
             msg  = msg+"<br> your k "+k;
            //  document.getElementById('msg').innerHTML = msg;
        }document.getElementById('msg').innerHTML = msg;
    }