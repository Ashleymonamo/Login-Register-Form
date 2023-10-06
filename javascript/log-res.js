let log=document.getElementById("log_in")//x
let res=document.getElementById("register")//y
let btnForm=document.getElementById("btn1");//z
function Register(){
    log.style.left="-400px";
    res.style.left="50px";
    btnForm.style.left="110px";
}
function Login(){
    log.style.left="50px";
    res.style.left="450px";
    btnForm.style.left="0";
}

function Check() {
    let checkAns=document.getElementById("check");
    if (checkAns.checked == true){
        
      
    } else {
       
        alert("Please Accept Terms and Conditions");
        return false;
    }
    
}
