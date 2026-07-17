// let x =5;
// let y="6";
// console.log(x+y);

// let a;
// console.log(typeof a);
 
// console.log(10>5);
// console.log(5 == "5");
// console.log(5 ==="5");  // strict equal to num+type check

// let num=5;
// if(num>5){
//     console.log("big");
    
// }else {
//     console.log("small");
    
// }

// let char="hello" ,num=100 , bool=true , nudef= nudefine;

// console.log(typeof char);
// console.log(typeof num);
// console.log(typeof bool);
// console.log(typeof nudef);

// let x="10";
// let y=2;
// console.log(x*y);

// let value = "20"
// value = Number(value)
// console.log(typeof (value));

// let num =5;
// let factorialValue=1;

// for(i=1 ; i<=num; i++){
//     factorialValue=factorialValue*i;
//     console.log(i,factorialValue);
    
// }

// for(i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//     }
    
    
// }

let num = 13344;
let resu = 0;

do {
    let modul = num % 10;
    resu = resu + modul;
    num = Math.floor(num / 10);
} while (num > 0);

console.log(resu);








