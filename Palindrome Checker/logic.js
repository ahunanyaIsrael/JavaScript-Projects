const word = document.getElementById('word');
const formSubmission = document.getElementById('check');

const isEmpty = (value) => {
    return value === ""
}

const reverseWord = (word) => {
    return word.split("").reverse().join("");
}

formSubmission.addEventListener('submit', event => {
    event.preventDefault();
    const inputWord = word.value
    const reversedWord = reverseWord(inputWord);

    if (isEmpty(inputWord.trim())) {
        alert('No word was entered, Please enter a word!!')
        return
    }
    if (reversedWord === inputWord) {
        alert(`${reversedWord} is a palindrome of ${inputWord}`)
    }
    else {
        alert(`${reversedWord} is not palindrome of ${inputWord}`)
    }
})