window.addEventListener("click",myFunction);

function myFunction(){
    document.getElementById("demo").innerHTML="my name is Jobayed";

}

let value= document.getElementById("demo").innerText;

let valueEncrypt=btoa(value);

let valueDecrypt=atob(valueEncrypt);

window.alert(valueDecrypt);