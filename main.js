const randNumber=[
  {
   FirstName: "tanvir",
   LastName: "foysal"
  },
  {
   FirstName: "shakhawat",
   LastName: "hossain",
  },
  {
   FirstName: "rasel",
   LastName: "hayder",
  }
  
  
];


concatFirsLast=randNumber.map(concatFirstname);




function concatFirstname(item){

return [item.FirstName,item.LastName].join(" ");
}


console.log(concatFirsLast);

document.getElementById("demo").innerHTML=concatFirsLast;