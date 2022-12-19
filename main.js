//make own iterable object

 const newobiterable={};

 newobiterable[Symbol.iterator]=function* (){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
 };

for(const newite of newobiterable){
    console.log(newite);    
}

