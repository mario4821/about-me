'use strict';
//counter to tally correct answers
var tally = 0, counter = 0, flag = true, userNameInput;
//Greeting
function helloName () {
  userNameInput = prompt('What is your name?');
  console.log('The user entered:' + userNameInput);

  alert('Hi, ' + userNameInput + '! Let\'s play a guessing game of random facts about me!');
}
helloName();
//Question 1
function cheesePizza() {
  //do {
  var favFood = prompt('Am I a huge fan of cheese pizza?').toUpperCase();
  console.log('The user entered for cheese pizza:' + favFood);

  if (favFood === 'No' || favFood === 'N') {
    tally++;
    flag === true;
    alert('Correct! I need flavor!');
  }
  else if (favFood === 'YES' || favFood === 'Y') {
    flag === true;
    alert('Nope! Boring!');
  } else {
    flag === false;
    alert('Please respond with Y, Yes, N, or No');
  }
} //while (flag === false);
//}
cheesePizza();
//Question 2
function petOwner() {
  do {
    var pets = prompt('Do I have any pets?').toUpperCase();
    console.log('The user entered for pets:' + pets + 'to pet question');

    if (pets === 'NO' || pets === 'N') {
      tally++;
      flag === true;
      alert('Correct! Although, I do want a dog at some point once I get it together.');
    }
    else if (pets === 'YES' || pets === 'Y') {
      flag === true;
      alert('Not a pet owner at the moment. I do want a dog at some point once I get it together.');
    } else {
      flag === false;
      alert('Please respond with Y, Yes, N, or No');
    }
  } while (flag === false);
}
petOwner();
// Question 3
function crossCountry() {
  do {
    var roadTrip = prompt('Have I ever driven cross-country across the USA?').toUpperCase(); console.log('The user entered for cross-country roadtrip:' + roadTrip);

    if (roadTrip === 'YES' || roadTrip === 'Y') {
      tally++;
      flag === true;
      alert('Correct! I drove cross country when I moved here from DC and I highly recommend it to anyone that gets the chance!');
    }
    else if (roadTrip === 'NO' || roadTrip === 'N') {
      flag = true;
      alert('Wrong! I drove cross country when I moved here from DC and I highly recommend it to anyone that gets the chance!');
    } else {
      flag === false;
      alert('Please respond with Y, Yes, N, or No');
    }
  } while (flag === false);
}
crossCountry();
// Question 4
function codeBefore(){
  do {
    var priorCode = prompt('Have I ever coded prior to Codefellows?').toUpperCase();
    console.log('The user entered for prior coding:' + priorCode);

    if (priorCode === 'NO' || priorCode === 'N') {
      tally++;
      flag === true;
      alert('Correct! This is the begining of my coding journey.');
    }
    else if (priorCode === 'YES' || priorCode === 'Y') {
      flag === true;
      alert('Nope. I had never coded prior to codefellows.');
    } else {
      flag === false;
      alert('Please respond with Y, Yes, N, or No');
    }
  } while (flag === false);
}
codeBefore();
// Question 5
function busRide() {
  do {
    var publicTrans = prompt('Do I own a car?').toUpperCase();
    console.log('The user entered for owning a car:' + publicTrans);

    if (publicTrans === 'NO' || publicTrans === 'N') {
      tally++;
      flag === true;
      alert('Correct! Public transportation for me!');
    }
    else if (publicTrans === 'YES' || publicTrans === 'Y') {
      flag === true;
      alert('Nope! Public transporation for me!');
    } else {
      flag === false;
      alert('Please respond with Y, Yes, N, or No');
    }
  } while (flag === false);
}
busRide();
//Question 6 Months lived in Seattle
function seattleFreeze(){
  var monthsHere = 14;
  //var counter = 0;

  do{
    var monthsGuess = parseInt(prompt('How many months have i lived in Seattle so far?'));
    counter++;
    console.log('The user entered for months living in Seattle:' + counter.length);
    if(monthsGuess === monthsHere){
      tally++;
      flag = true;
      alert('Correct!! Been here a year and change.');
    } else if(monthsGuess < 14){
      flag = false;
      alert('Nope! Been here longer!');
    } else {
      flag = false;
      alert('Haven\'t been here that long!');
    } if (counter >= 5 && flag === false) {
      alert('Sorry! You maxed out your guesses!');
      break;
    }
  } while(flag === false && counter <= 5);
}
seattleFreeze();
//Question 7 States Lived In
function statesHome() {
  var statesLived = ['TEXAS', 'VIRGINIA', 'D.C.'];

  do {
    var difState = prompt('What states have I lived in?').toUpperCase();
    counter++;
    for(var i = 0; i < statesLived.length; i++ ){
      if(difState === statesLived[i]){
        alert('Correct! I have lived in ' + statesLived.join(' '));
        tally++;
        flag = true;
        console.log('The user guessed correct state lived' + statesLived);
        break;
      }
    } if (flag === false);{
      alert('Nope! Guess again!');
    } if (counter > 5) {
      alert('Sorry! You maxed out your guesses!');
      flag === true;
      //break;
    }
  } while(counter <= 5 && flag === false);
}
statesHome();

alert('Way to go, ' + userNameInput + '! You got ' + tally + ' out of 7 questions about me correct!');

alert('Pleased to meet you, friend!');