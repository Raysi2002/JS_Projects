function isPalindrome(str){
    let n = str.length;
    let left = 0;
    let right = n - 1;
    while(left < right){
        if(str[left] != str[right])
            return false;
        left++;
        right--;
    }
    return true;
}

let inputStr = document.getElementById("form");
inputStr.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputText = document.getElementById("string").value;
    if(isPalindrome(inputText))
        alert("Yes, The word is palindrome");
    else
        alert("No, String isn't palindrome");
})

// console.log(isPalindrome('madam aaa'));