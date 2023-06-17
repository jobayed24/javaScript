/// before es6 

function sum(a,b){
   if(b===undefined){
      b=4;
   }

   const x=a+b;
   return x;
}


document.getElementById("demo").innerHTML=sum(10);




/// afeter es6

function sum2(a,b=5){
   const newSum=a+b;

   return newSum;
}

document.getElementById("demo2").innerHTML=sum2(5);