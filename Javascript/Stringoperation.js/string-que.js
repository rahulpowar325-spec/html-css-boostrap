// // Q1 lower case conversion 

// function convertToUpperCase(str){
//     return str.toUpperCase()

// }
strpara="hello just do it"
// str=convertToUpperCase(strpara)
// console.log(str)


// // Q2lower case conversion----------------------------------------------------------------------------------------

// function convertToLowerCase(str){
//     return str.toLowerCase()
// }
// lowerchar="HELLO HOE ARE YOU "
// char = convertToLowerCase(lowerchar)
// console.log(char);

// // Q3 extract the first world of sentance----------------------------------------------------------------------

// const extractFristWord=(str) => {
//     return str.charAt(0)

// }
// firstLetter =extractFristWord(strpara)
// console.log(firstLetter);


// //Q4 split string into array ------------------------------------------------------------------------------------

// const convertArrayWorld =(str)=>{
//     return str.split(" ")
// }
// splitlatter=convertArrayWorld(strpara)
// console.log(splitlatter);

// //Q5 reverse Array--------------------------------------------------------------------------------------------

// // function SpaceWithHypen(){
// //     arrayWolrd=str.split(" ")
// //     SpaceWithHypen=arrayWolrd.join("-")
// //     return SpaceWithHypen
// // }
// // strhypan=SpaceWithHypen(strpara)
// // console.log(strhypan);

// function SpaceWithHypen(str){
//     SpaceWithHypen=str.split(" ").join("-")
//     return SpaceWithHypen
// }
// strhypan=SpaceWithHypen(strpara)
// console.log(strhypan);

// //Q6 replace -------------------------------------------------------------------------------------------------
// // function ReplaceSpace(str){
// //     ReplaceSpace=str.replaceAll( "-" ," " )
// //     return ReplaceSpace
// // }
// // replac=ReplaceSpace(strpara)
// // console.log(replac);

// //short 
// function ReplaceSpace(str){
//     return str.replaceAll( "-" ," " )
// }
// console.log(ReplaceSpace(strpara));
// //--------------------------------------------------------------------------------------------------------------
// name="rahul powar"
// console.log(name.length-1);  //str.length
// //-------------------------------------------------------------------------------------------------------------

// char="madakm"
// function FristLastLater(str){
//     first=str.charAt(0)
//     lastlater=str.charAt(str.length-1)
//     if(first==lastlater){
//         return 'this string is palindrom'

//     }else{
//         return 'this string is not palindrom'
//     }
// }
// console.log(FristLastLater(char));


// revers string -----------------------------------------------------------------------------------------------

function reversstr(str){
    reverrsSTR=''
        for(i=str.length-1; i>0 ;i--){
            reverrsSTR= reverrsSTR+str[i]
        }
        return reverrsSTR
}
console.log(reversstr(strpara));
