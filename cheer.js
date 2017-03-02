#!/usr/bin/env node
// this is a shabang that tells the terminal we want to run this file in a node environment
// the shabang MUST be at the top with no comments above it
// this means we don't have to type node in front of the file in the terminal
// we still have to type ./ in front of the file though... dumb
// chmod +x cheer.js will change the read write directives so we can directly open it

// 1. const and/or let
// 1. Object literal shorthand
// 1. Destructuring assignments
// 1. Fat arrow function(s)
// 1. Spread operator
// 1. Template literals

const giveMe = "Gimmmie";

let cheer = (name) => {
  let names = name.toUpperCase();
  // let nameInArray = name.split('');
  let nameInArray = [...names];
  for (let elem of nameInArray) {
    let conj = 'AEIOFHLMNRSX'.includes(elem) ? 'an' : 'a'; // ternary operator
    if (elem !== ' ') {
      console.log(giveMe, conj, elem + '!');
    }
  }
  console.log(`What does that spell?\n${names}!`)
}
cheer('John Able');
// setInterval(cheer('John Able'), 1000);


// IN CLASS DEMONSTRATION

// // Cheer
// const first = 'Joe'; //const
// const second = 'Shep'; //const

// // object literal shorthand
// const myName = { first, second } //const

// const nodeCheer = ({first, second}) => { // destructuring assignment
//   let name = `${first} ${second}`.toUpperCase(); // string template literals, let
//   [...first, ...second].forEach( (letter) => { // spread operator and fat arrow function
//     let conj = 'aeioufhlmnrsx'.includes(letter.toLowerCase()) ? 'an' : 'a' // `includes()`. Surprise! It's ES6
//     console.log(`Gimmmie ${conj} ${letter.toUpperCase()}!`); // string template literals again
//   });
//   console.log(`What's that spell?\n${name}!`);
// };

// nodeCheer(myName);
