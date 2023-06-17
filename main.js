const person={
   fname: "Jobayed",
   lname: "Hossen",
   fullName:function(){
      return this.fname+" "+this.lname;
   }
}


const member={
   fname:"Jakir",
   lname:"Khan",
}


const result=person.fullName.bind(member);

console.log(result());