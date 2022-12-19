///generator function

const gn=function* (i){
yield i;
yield i+10;
};


const gnend=gn(10);
console.log(gnend.next().value);
console.log(gnend.next().value);