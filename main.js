/// default function constructor to defind the javascript functioin

const myFunction=new Function("a","b","return a*b");


document.getElementById("demo").innerHTML=myFunction(4,5);