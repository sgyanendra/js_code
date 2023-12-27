const user={
    username:"Gyanendra",
    contact:6390677722
}
function myObject(users){
    console.log(`${users.username} is Student of Abes engineering college ${users.contact}`);     
}
myObject(user);
/*myObject({
    username:"Gyanendra",
    contact:6390677722
});*/

let arr=[1,"Gyanendra",6390677722]
function myArray(arr1){
    console.log(`${arr1[1]} is Student of Abes engineering college ${arr1[2]}`);     
}
//myArray(arr);
myArray([1,"Gyanendra",6390677722])
