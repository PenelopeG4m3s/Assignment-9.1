// function to test for the palindrome
        function testPalin(){
            // get the value that the user entered in the textbox
            let userInput = document.getElementById("txtInput").value.trim();

            console.log("userInput=" + userInput);

            // we need to move this into an if/else

            // this statement implied == true, you could write it out
            // isPalindrom(userInput == true)
            if (isPalindrome(userInput)){
                document.getElementById("divResult").textContent = "Yes, " + userInput + " is a palindrome";
            }
            else{
                document.getElementById("divResult").textContent = "No, " + userInput + " is not a palindrome";
            }
        }

        // function will test to see if a word is a palindrome
        function isPalindrome(wordToTest){
            // remove any spaced inside of the word(s)
            let cleanedWord = wordToTest.replace(/\s/g, "");

            // change any UPPER CASE letters to lower case
            cleanedWord = cleanedWord.toLowerCase();

            console.log("cleanedWord=" + cleanedWord);

            // convert the cleaned string to an array
            let arrCleaned = cleanedWord.split("");

            // reverse the array contents
            arrCleaned = arrCleaned.reverse();

            // take our reversed array and convert it back to a string
            let reversedWord = arrCleaned.join("");

            console.log("reversedWord=" + reversedWord);

            console.log(cleanedWord == reversedWord);
            return ( cleanedWord == reversedWord );
        }