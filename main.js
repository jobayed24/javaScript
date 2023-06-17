function sum(...args){
   let sum=0;
   for(let arg of args){
      sum= sum+=arg;
   }
   return sum;
}


document.getElementById("demo").innerHTML=sum(45,54,33,23,23,32);