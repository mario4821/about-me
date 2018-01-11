'use strict';
var userNameInput = prompt('What is your name?');
    console.log('The user entered:' + userNameInput);

    alert('Hi, ' + userNameInput + '! Let\'s play a guessing game of random facts about me!');

//Question 1
var favFood = prompt('Am I a huge fan of cheese pizza?').toUpperCase(); 
console.log(favFood);

if (favFood === 'YES' || favFood === 'Y') {
    alert('Nope! Boring!')
}
else if (favFood ==='NO' || favFood === 'N') {
    alert('Correct! I need flavor!')
}
//Question 2
var pets = prompt('Do I have any pets?').toUpperCase(); 
console.log(pets);

if (pets === 'YES' || pets === 'Y'){
    alert('Not a pet owner at the moment. I do want a dog at some point once I get it together.')
}
else if (pets === 'NO' || pets === 'N'){
    alert('Correct. I do want a dog at some point once I get it together.')
}
// Question 3
var roadTrip = prompt('Have I ever driven cross country across the USA?').toUpperCase(); console.log(roadTrip);

if (roadTrip === 'YES' || roadTrip === 'Y') {
    alert('Correct! I drove cross country when I moved here from DC and I highly recommend it to anyone that gets the chance!')
}
else if (roadTrip ==='NO' || roadTrip === 'N') {
    alert('Wrong! I drove cross country when I moved here from DC and I highly recommend it to anyone that gets the chance!')
}
// Question 4
var priorCode = prompt('Have I ever coded prior to Codefellows?').toUpperCase(); 
console.log(priorCode);

if (priorCode === 'YES' || priorCode === 'Y') {
    alert('Nope. I had never coded prior to codefellows.')
}
else if (priorCode ==='NO' || priorCode === 'N') {
    alert('Correct! This is the begining of my coding journey.')
}
// Question 5
var publicTrans = prompt('Do I own a car?').toUpperCase(); 
console.log(publicTrans);

if (publicTrans === 'YES' || publicTrans === 'Y') {
    alert('Nope. Public transportation for me!')
}
else if (publicTrans ==='NO' || publicTrans === 'N') {
    alert('Correct! Public transporation for me!')
}
//Question 6 Sibling
var siblings = prompt('How many siblings do I have?')

if (parseInt(siblings) === 1){
    alert('That is correct! One younger sister.')
}
else {
    alert('Guess again!')
}

//Question 7 Home State
var homeState = prompt('What is my homestate?');

if (homeState ==='Texas'){
    alert('That is correct!')
}
else {
    alert('Wrong Answer!')
}