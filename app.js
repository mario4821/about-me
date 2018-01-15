'use strict';

var tally = 0, counter = 0, flag = true, userNameInput;

function helloName () {
  userNameInput = prompt('What is your name?');
  console.log('The user entered:' + userNameInput);

  alert('Hi, ' + userNameInput + '! Let\'s play a guessing game of random facts about me!');
}
helloName();

function cheesePizza() {
  do {
    var favFood = prompt('Am I a huge fan of cheese pizza?').toUpperCase();
    console.log('The user entered for cheese pizza:' + favFood);

    if (favFood === 'No' || favFood === 'N') {
      tally++;
      flag === false;
      alert('Correct! I need flavor!');
      break;
    }
    else if (favFood === 'YES' || favFood === 'Y') {
      flag === false;
      alert('Nope! Boring!');
      break;
    } else {
      flag === true;
      alert('Please respond with Y, Yes, N, or No');
    }
  } while (flag === true);
}
cheesePizza();

function petOwner() {
  do {
    var pets = prompt('Do I have any pets?').toUpperCase();
    console.log('The user entered for pets:' + pets + 'to pet question');

    if (pets === 'NO' || pets === 'N') {
      tally++;
      flag === false;
      alert('Correct! Although, I do want a dog at some point once I get it together.');
      break;
    }
    else if (pets === 'YES' || pets === 'Y') {
      flag === false;
      alert('Not a pet owner at the moment. I do want a dog at some point once I get it together.');
      break;
    } else {
      flag === true;
      alert('Please respond with Y, Yes, N, or No');
    }
  } while (flag === true);
}
petOwner();

function crossCountry() {
  do {
    var roadTrip = prompt('Have I ever driven cross-country across the USA?').toUpperCase(); console.log('The user entered for cross-country roadtrip:' + roadTrip);

    if (roadTrip === 'YES' || roadTrip === 'Y') {
      tally++;
      flag === false;
      alert('Correct! I drove cross country when I moved here from DC and I highly recommend it to anyone that gets the chance!');
      break;
    }
    else if (roadTrip === 'NO' || roadTrip === 'N') {
      flag = false;
      alert('Wrong! I drove cross country when I moved here from DC and I highly recommend it to anyone that gets the chance!');
      break;
    } else {
      flag === true;
      alert('Please respond with Y, Yes, N, or No');
    }
  } while (flag === true);
}
crossCountry();

function codeBefore(){
  do {
    var priorCode = prompt('Have I ever coded prior to Codefellows?').toUpperCase();
    console.log('The user entered for prior coding:' + priorCode);

    if (priorCode === 'NO' || priorCode === 'N') {
      tally++;
      flag === false;
      alert('Correct! This is the begining of my coding journey.');
      break;
    }
    else if (priorCode === 'YES' || priorCode === 'Y') {
      flag === false;
      alert('Nope. I had never coded prior to codefellows.');
      break;
    } else {
      flag === true;
      alert('Please respond with Y, Yes, N, or No');
    }
  } while (flag === true);
}
codeBefore();

function busRide() {
  do {
    var publicTrans = prompt('Do I own a car?').toUpperCase();
    console.log('The user entered for owning a car:' + publicTrans);

    if (publicTrans === 'NO' || publicTrans === 'N') {
      tally++;
      flag === false;
      alert('Correct! Public transportation for me!');
      break;
    }
    else if (publicTrans === 'YES' || publicTrans === 'Y') {
      flag === false;
      alert('Nope! Public transporation for me!');
      break;
    } else {
      flag === true;
      alert('Please respond with Y, Yes, N, or No');
    }
  } while (flag === true);
}
busRide();

function seattleFreeze(){
  var monthsHere = 14;
  do{
    var monthsGuess = parseInt(prompt('How many months have i lived in Seattle so far?'));
    counter++;
    console.log('The user entered for months living in Seattle:' + counter.length);
    if(monthsGuess === monthsHere){
      tally++;
      flag = false;
      alert('Correct!! Been here a year and change.');
      break;
    } else if(monthsGuess < 14){
      flag === true;
      alert('Nope! Been here longer!');
    } else {
      flag === true;
      alert('Haven\'t been here that long!');
    } if (counter >= 5 && flag === false) {
      alert('Sorry! You maxed out your guesses!');
      break;
    }
  } while(flag === true && counter <= 5);
}
seattleFreeze();

function statesHome() {
  var statesLived = ['TEXAS', 'VIRGINIA', 'D.C.'];

  do {
    var difState = prompt('What states have I lived in?').toUpperCase();
    counter++;
    for(var i = 0; i < statesLived.length; i++ ){
      if(difState === statesLived[i]){
        alert('Correct! I have lived in ' + statesLived.join(' '));
        tally++;
        flag === false;
        console.log('The user guessed correct state lived' + statesLived);
        break;
      }
      else (flag === true); {
        alert('Nope! Guess again!');
      }
      if (counter > 5); {
        alert('Sorry! You maxed out your guesses!');
        flag === false;
        break;
      }
    }
  } while(counter <= 5 && flag === true);
}
statesHome();

alert('Way to go, ' + userNameInput + '! You got ' + tally + ' out of 7 questions about me correct!');

alert('Pleased to meet you, friend!');