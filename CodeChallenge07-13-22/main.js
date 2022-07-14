//Move the first letter of each it commit -m "first commit"word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay'
// pigIt('Hello world !');     // elloHay orldway !
// pigIt('Pig latin is cool'),'igPay atinlay siay oolcay'
// pigIt('This is my string'),'hisTay siay ymay tringsay'

function pigIt(str) {
  str = str.split(" ");
  let arr = [];
  let extra = [];
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === "!" || str[i] === "?") {
      extra.push(" " + str[i]);
    } else {
      arr.push(`${str[i].slice(1)}${str[i][0]}ay`);
    }
  }

  return arr.join(" ").concat(extra);
}
