const array1 = ['a', 'b', 'c','a'];
console.log(typeof(array1));

const iteator1=array1[Symbol.iterator]();
console.log(iteator1);
for(const newarray of array1){
    console.log(newarray);
}
console.log("\n")

for(const newanother of iteator1){
    console.log(newanother);
}
