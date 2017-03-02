// 1. const and/or let
// 1. Object literal shorthand
// 1. Destructuring assignments
// 1. Fat arrow function(s)
// 1. Spread operator
// 1. Template literals

const giveMe = "Give me";

let cheer = (name) => {
  let names = name.toUpperCase();
  // let nameInArray = name.split('');
  let nameInArray = [...names];
  for (let elem of nameInArray) {
    // if (elem == 'A' || elem == 'E' || elem == 'I' || elem == 'O') {
    //   console.log(anAn, elem + '!');
    // } else if (elem !== ' ') {
    //   console.log(anA, elem + '!');
    // }
    let conj = 'AEIOFHLMNRSX'.includes(elem) ? 'an' : 'a';
    if (elem !== ' ') {
      console.log(giveMe, conj, elem + '!');
    }
  }
  console.log(`What does that spell?\n${names}!`)
  // console.log(names + '!');
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
