name1 ='rahul'
name2="powar"
name= name1+" "+name2
console.log(name);

console.log(name.length);  //str.length

console.log(name.charAt(6)); //index 
console.log(name[2]); // same work

console.log(name.toUpperCase());  //letter 
console.log(name.toLowerCase());

str1 ="hello world"
str2="world"

msg =str1.concat(" ",str2, "!!!")
console.log(msg);


indexNumber = name.indexOf("hellow")
console.log(indexNumber);

console.log(str1.indexOf('o'));
console.log(str1.lastIndexOf('o'));


//return boolean value true or false
console.log(str1.includes('hello'));
console.log(str1.includes('sdaddd'));

//startWith()
strr= "rahul powar hoe are you"
console.log(strr.startsWith("are"))
console.log(strr.endsWith("you"))

//.slice() , .substring()  , .substr() 

sub1=strr.slice(1,7)
console.log(sub1);

sub2=strr.substr(1,7)
console.log(sub2);

//.trim() , .trimStart(), .trimEnd() 

strr1="        hellow      "
console.log(strr1.trim().length);
console.log(strr1.trimStart().length);  //starting space remove 
console.log(strr1.trimEnd().length); //ending space remove


//.replace()  and  .replaceAll().

strr2= strr.replace('hoe' ,'hello')
console.log(strr2);
console.log(strr);

strr3= "just do it, it dosen't mater "
console.log(strr3.replaceAll("it","its" ));


// .split)()
fruits = 'apple bannana mango orenge'
fruitsArrey = fruits.split()
fruitsArrey = fruits.split(' ')
console.log(fruitsArrey);
















