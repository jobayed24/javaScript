const randomNumbers=[
   34,
   12,
   54,
   13,
   6,
   9,
   50,
   01
];


let newrandomNumbers=randomNumbers.filter(conditionNumber);


function conditionNumber(randomNumber){
   return randomNumber>=1;
}

let ascendingNumbers=newrandomNumbers.sort(function(a,b){return a-b});

console.log(newrandomNumbers);
console.log(ascendingNumbers);

document.getElementById("demo").innerHTML=newrandomNumbers;