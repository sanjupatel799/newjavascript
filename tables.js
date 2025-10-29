function method() {
    let n = 3;
    let tt = '';

    for (let i = 1; i <= 10; i++) {
        tt = tt + "<br>" + n + "*" + i + "=" + (n * i);
        document.getElementById('tt').innerHTML = tt;
    }
}
function method1(){
let  a = 19;
let r = 1;
let tt = '';
    while (r <= 10){
        tt  = tt+"<br>" + a + "*" + r + "=" + (a * r);
        r++;
    }
    document.getElementById('tt').innerHTML = tt;
}
function method2(){
    let  j = 4;
    let i = 1;
    let tt = '';
    do {
        tt  = tt+"<br>" + j + "*" + i + "=" + (j * i);
        i++;
    }while (i <= 10);
    document.getElementById('tt').innerHTML = tt;
}
