const Array = require('./arrays2');

function main(){

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push('tauhida')
  // arr.push(3);
  // arr.push(10);
  // arr.push(2);
  // arr.push('time');
  // arr.pop();
  // arr.pop();

  console.log(arr.get(0));
}

// main();

function URLify(str) {
  for ( let i =0; i < str.length; i++) {
    if(str[i] === ' ') {
      str = str.slice(0, i) + '%20' + str.slice(i + 1, str.length)
    }
  }
  return str;
}

console.log(URLify('tauhida parveen'))
console.log(URLify('www.thinkful.com /tauh ida parv een'))