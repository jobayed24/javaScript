const cars=[
    
];

let carsLength=cars.length;
// cars[carsLength]="chevrolet";
cars.push(cars[carsLength-1]="mercedes");
cars.push(cars[carsLength-1]="Tesla");
cars.push(cars[carsLength-1]="BMW");
// looping through forEach function
console.log(cars);
text="<ul>";
cars.forEach(loopfun);
text+="</ul>";

function loopfun(value){
    text+="<li>"+value+"</li>";
}



document.getElementById("demo").innerHTML=text;