const ages = [32, 33, 12, 40];



function getData(age){
    return age> document.getElementById("ageToCheck").value;
}

function myFunction(){
    document.getElementById("demo").innerHTML=ages.filter(getData);
}
