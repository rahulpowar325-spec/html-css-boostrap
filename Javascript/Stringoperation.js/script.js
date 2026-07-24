const inputElement = document.getElementById("inputpara")
const resultElement = document.getElementById("result")

function convertToUpperCase(){
    const inputValue = inputElement.value
    outputText = inputValue.toUpperCase()
    resultElement.textContent =outputText

}

function convertToLowerCase(){
    const inputValue = inputElement.value
    outputText = inputValue.toLowerCase()
    resultElement.textContent =outputText

}

function CheckPalindrom() {
    const inputValue = inputElement.value;

    let reverseSTR = "";
    let outputText = "";

    for (let i = inputValue.length - 1; i >= 0; i--) {
        reverseSTR = reverseSTR + inputValue[i];
    }

    console.log(reverseSTR);

    if (inputValue === reverseSTR) {
        outputText = "It is Palindrome";
    } else {
        outputText = "It is not Palindrome";
    }

    resultElement.textContent = outputText;
}

function countVowel() {
    const inputValue = inputElement.value;

    let count = 0;
    let vowels = "aeiouAEIOU";
    let len = inputValue.length;

    for (let i = 0; i < len; i++) {

        if (vowels.includes(inputValue[i])) {
            count++;
        }
    }

    resultElement.textContent = "Vowels Count: " + count;
}


