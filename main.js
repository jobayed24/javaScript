
///show all p in div1 


function div1ParaElems(){
   const div1=document.getElementById("div1");
   const allParaDiv = div1.getElementsByTagName("p");

   let div1Para=allParaDiv.length;

   alert(`There are ${div1Para} p tag available`);
}