// shoping descount
let Amount =120;
if(Amount>100){
   let finalAmount = Amount-(Amount*10)/100;
   console.log(finalAmount);
   
   console.log((Amount*10)/100);
}
else{
    console.log(Amount);
    
}




// arithmatic operator
let int1= 10;
let int2= 5;

console.log("adition is :", int1+int2);
console.log("subtraction is :", int1-int2);
console.log("multi is :", int1*int2);
console.log("Division is :", int1/int2);
console.log("module is :", int1%int2);
// console.log(" is :", int1**2);

// Comparision
let a=10 , b=20;

console.log(a<b);
console.log(a>b);
console.log(a===b);
console.log(a!=b);

// logical operater 

let isAdult =true ;
let hasLicence =false;

console.log( isAdult && hasLicence); // two condition true = true
console.log( isAdult || hasLicence);  // if only one condition true =true
console.log( !isAdult );


// Demonstrate operater precedure 
let result = 10+3*4-2/32;
console.log(result);


//Assinmant operator
let x =10 
x+=5;
x*=7;
console.log(x);




