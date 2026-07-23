const inputElement = document.getElementById("inputpara")
const resultElement = document.getElementById("result")

function convertToUpperCase(){
    const inputValue = inputElement.value
    outputText = inputValue.toUpperCase()
    resultElement.textContent =outputText

}

function CheckPalindrom(){
   const inputValue = inputElement.value;

    reverseSTR ="";
    for(let i=inputValue.length-1; i>=0; i--){
        reverseSTR=reverseSTR+inputValue[i]

    }
     console.log(reverseSTR);
     if(inputValue == reverseSTR){
        console.log("******");
        outputText = "it is palinrom"

        
     }else{
        outputText="it not palindrom"
     }
     resultElement.textContent=outputText
}   

function countVowel(){
    const inputValue = inputElement.value
    count=0

    vowels='aeiouAEIOU'
    len=inputValue.length

    for(let i=o ; i<len ; i++){
        inputValue[i] //inputValue.charAt(i)

        if(vowels.includes(inputValue[i])){
            count++
        }
    }
     resultElement.textContent="vowels count :"+ count
}   



