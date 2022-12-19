///generator function

const newfun=function* (){
    yield 'a';
    yield 'b';
    yield 'c';

};
let val='';
for(const singleValue of newfun()){
   val=val+singleValue;
   
}
console.log(val);