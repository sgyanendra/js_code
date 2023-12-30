const num={
    'name':"Gyanendra",
    'class':12
}
const num1=['Ram','Sumit','Amkjjk',4,5]
for (const item in num1) {
   console.log(item);
}
console.log("Second Term!!!!!!!!!!!!!");
for (let item of num1) {
 console.log(item);   
 }

 console.log("Third Term!!!!!!!!!!!");
num1.forEach(function (item){
 console.log(item)     
})

