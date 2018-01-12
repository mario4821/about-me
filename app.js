'use strict';
//Greeting
function helloName () {
  var userNameInput = prompt('What is your name?');
  console.log('The user entered:' + userNameInput);

  alert('Hi, ' + userNameInput + '! Let\'s play a guessing game of random facts about me!');
}
helloName();
//Question 1
function cheesePizza() {
  var favFood = prompt('Am I a huge fan of cheese pizza?').toUpperCase();
  console.log('The user entered:' + favFood);

  if (favFood === 'YES' || favFood === 'Y') {
    alert('Nope! Boring!');
  }
  else if (favFood === 'NO' || favFood === 'N') {
    alert('Correct! I need flavor!');
  }
}
cheesePizza();
//Question 2
function petOwner() {
  var pets = prompt('Do I have any pets?').toUpperCase();
  console.log('The user entered:' + pets);

  if (pets === 'YES' || pets === 'Y'){
    alert('Not a pet owner at the moment. I do want a dog at some point once I get it together.');
  }
  else if (pets === 'NO' || pets === 'N'){
    alert('Correct. I do want a dog at some point once I get it together.');
  }
}
petOwner();
// Question 3
function crossCountry() {
  var roadTrip = prompt('Have I ever driven cross country across the USA?').toUpperCase(); console.log('The user entered:' + roadTrip);

  if (roadTrip === 'YES' || roadTrip === 'Y') {
    alert('Correct! I drove cross country when I moved here from DC and I highly recommend it to anyone that gets the chance!');
  }
  else if (roadTrip === 'NO' || roadTrip === 'N') {
    alert('Wrong! I drove cross country when I moved here from DC and I highly recommend it to anyone that gets the chance!');
  }
}
crossCountry();
// Question 4
function codeBefore(){
  var priorCode = prompt('Have I ever coded prior to Codefellows?').toUpperCase();
  console.log('The user entered:' + priorCode);

  if (priorCode === 'YES' || priorCode === 'Y') {
    alert('Nope. I had never coded prior to codefellows.');
  }
  else if (priorCode === 'NO' || priorCode === 'N') {
    alert('Correct! This is the begining of my coding journey.');
  }
}
codeBefore();
// Question 5
function busRide() {
  var publicTrans = prompt('Do I own a car?').toUpperCase();
  console.log('The user entered:' + publicTrans);

  if (publicTrans === 'YES' || publicTrans === 'Y') {
    alert('Nope. Public transportation for me!');
  }
  else if (publicTrans === 'NO' || publicTrans === 'N') {
    alert('Correct! Public transporation for me!');
  }
}
busRide();
//Question 6 Months lived in Seattle
function seattleFreeze(){
  var monthsHere = 14;
  var counter = 0;
  var flag = true;
  do{
    var monthsGuess = parseInt(prompt('How many months have i lived in Seattle so far?'));
    counter++;
    console.log('The user entered:' + counter.length);
    if(monthsGuess === monthsHere){
      flag = false;
      alert('Correct!! Been here a year and change.');
    } else if(monthsGuess < 14){
      alert('Nope! Been here longer!');
    } else{
      alert('Not a local yet!');
    }
  } while(flag === true && counter <= 5);
}
seattleFreeze();
//Question 7 States Lived In
//function statesHome() {
// var x = false;
//  var y = 0;

 // while(y < 5 && x === false){}
 // var statesLived = ['Texas', 'Virginia', 'D.C.'];
 // var difState = prompt('What states have I lived in?').toUpperCase();
 // y++;
 // for(var i = 0; i < statesLived.length; i++ ){
  //  if(difState === statesLived[i]){
    //  x = true;
  //    alert('Correct! I have lived in' + statesLived);
   //   console.log(x);
   // }else{
    //  alert('Nope! Guess again!');
    //  break;}
 // }
 // if(y === 1){alert('4 more tries!');}
 // if(y === 2){alert('3 more tries!');}
 // if(y === 3){alert('2 more tries!');}
 // if(y === 4){alert('1 more try!');}
//}
//statesHome();