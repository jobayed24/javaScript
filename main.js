const person={
   firstName: "jobayed",
   lastName: "hossen",
   display: function(){
     const x=document.getElementById("demo");
      x.innerHTML=this.firstName+" "+this.lastName;
   }
}

const displayName=person.display.bind(person);

setTimeout(displayName,3000);