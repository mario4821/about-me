'use strict';

var siblings = prompt('How many siblings do I have?')

if (parseInt(siblings) === 1){
    alert('That is correct! One younger sister.')
}
else {
    alert('Guess again!')
}

var homeState = prompt('What is my homestate?');

if (homeState ==='Texas'){
    alert('That is correct!')
}
else {
    alert('Wrong Answer!')
}

var favFood = prompt('What is my favorite kind of pizza? Supreme or Cheese?');

if (favFood ==='Supreme') {
    alert('That is correct!')
}
if (favFood ==='Cheese') {
    alert('Boring!')
}
else {
    alert('Supreme or Cheese')
}

var pets = prompt('How many pets do I have?')

if (parseInt(pets) === 0){
    alert('Correct! I do really want a dog tho.')
}
else {
    alert('Try Again!')
}

var activity = prompt('Do I prefer to ski or snowboard?')

if (activity === 'snowboard'){
    alert('That is correct!')
}
if (activity === 'ski'){
    alert('Not my preferred.')
}



