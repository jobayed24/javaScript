const randNumber=[
    4,
    6,
    18,
    20,
];



letValue=document.getElementById("value").value;

function ageRandom(age){
   return age> letValue;
}


function printNumber(){
    document.getElementById("demo").innerHTML=randNumber.find(ageRandom);
}