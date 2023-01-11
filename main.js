const randNumber=[
    4,
    9,
    10,
    14,
    16,
];



document.getElementById("demo").innerHTML=randNumber.find(arrayFind);

function arrayFind(number){
    return number<15;
}


