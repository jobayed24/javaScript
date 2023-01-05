const cars=[
    'saab',
    'bmw',
    'chevrolet',
    'merchedes',
    'toyato',
];

// looping through forEach function

text="<ul>";
cars.forEach(loopfun);
text+="</ul>";

function loopfun(value){
    text+="<li>"+value+"</li>";
}



document.getElementById("demo").innerHTML=text;