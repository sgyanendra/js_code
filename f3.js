const myNum=[1,2,3,4,5,6,7,8,9]
const newnum=myNum.filter((num)=>num<=4)
console.log(newnum);

const newnum1=myNum.map((num)=>num+10)
console.log(newnum1);

const newnum2=myNum.reduce((acc,num)=>(acc+num),0)
console.log(newnum2);
// function chaining------------------------
const total=myNum.filter((num)=>num>4).map((num)=>num+10).reduce((acc,num)=>(acc+num),0);
console.log(total);
