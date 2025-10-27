function userVerify(){
    let name=document.getElementById("name").value;
    let password=document.getElementById("pass").value;

    if(name == '' && password == ''){
    document.getElementById('msg').innerHTML = 'Please enter the required fields!';
 }
else if(name  == '' ){
    document.getElementById('msg').innerHTML = 'Please enter the name!';

 }
 else if(password == ''){
    document.getElementById('msg').innerHTML = 'Please enter the password!';
 }
 else{
    document.getElementById('msg').innerHTML = name + '' + password + ''+ ' valid';
 } 




    
}