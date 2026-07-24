function greet(){
 console.log("hello wold");

     
}
greet()

function greetUser (name,age)
{
    console.log("hello", name ,"!", "youer age is",age);

    
}
greetUser("piyush",20)

function add(a,b){
    return a+b
}
addition=add(10,20)
console.log(addition);

greet2=()=>console.log("hello")

addition1=(x,y)=>{
    add=x+y
    return add
}

function multiplicationTable(num)
{
    for(i=1;i<=10;i++){
        console.log(num,"*",i, "=", num*i);
        
    }
}
multiplicationTable(9)