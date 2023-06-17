const person={
   firstName: "Jobayed",
   lastName: "Hossen",
   display: function(){
      x=document.getElementById("demo").innerHTML=this.firstName+" "+this.lastName;
      
   }
}



setTimeout(person.display,3000);
