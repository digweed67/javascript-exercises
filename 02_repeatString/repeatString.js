function repeatString(string, num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += string;
    }
    return result;
}

// Example usage
let repeatedString = repeatString('Hello, ', 3);
console.log(repeatedString);  // Output: Hello, Hello, Hello,


/* Let's go through an example with word = 'Hello, ' and the loop running three times:

Iteration 1: string is an empty string, and word is appended to it: string = '' + 'Hello, ', resulting in string = 'Hello, '.

Iteration 2: string now contains 'Hello, ', and word is appended to it again: string = 'Hello, ' + 'Hello, ', resulting in string = 'Hello, Hello, '.

Iteration 3: string now contains 'Hello, Hello, ', and word is appended once more: string = 'Hello, Hello, ' + 'Hello, ', resulting in string = 'Hello, Hello, Hello, '.


if we used string = word, it would overwrite it not add it each time (it would say hello no hellohellohello  */
 
const repeatString = function (word, times) {
    if (times < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < times; i++) {
      string += word;
    }
    return string;
  };


