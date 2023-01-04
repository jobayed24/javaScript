const cars=[
    'saab',
    'bmw',
    'chevrolet',
    'merchedes',
    'toyato',
];


cars.push("jobayed");
cars.push("tanvir");
cars.push("riyadh");
let flen= cars.length;



let text="<ul>";

for(let i=0;i<flen;i++){
    text+="<li>"+cars[i]+"</>";
}

text+="</ul>";


document.getElementById("demo").innerHTML=text;