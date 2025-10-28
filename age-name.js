function perfect(){
    let name=document.getElementById("name").value;
    console.log(name)
    let age=document.getElementById("age").value;
    if(age == ''){
        alert("age details required");
    } 
    else{
        var age1=parseInt(age);
        if(age1 > 0){
            console.log(age1);
        }
        else{
            alert("enter the exact values");
        }
    }
    let language=document.getElementById("language").value;
    console.log(language)
    if(skill.checked){
        console.log('c')
    }
    if(skills.checked){
        console.log('java')
    }
    if(skillss.checked){
        console.log('python')
    }
    if(skillsss.checked){
        console.log('php')
    }
}