var randomNumber = Math.floor(Math.random() * 10) + 1;
var userAnswer = prompt("I am thinking of a number between 1 and 10. What is the number?");
var answer = false;

if (parseInt(userAnswer) === randomNumber) {
    answer = true;
}

if (answer) {
    document.write('<p>You are correct!</p>')
} else {
    document.write('<p>Sorry try again. The correct number was ' + randomNumber + '</p>');
}