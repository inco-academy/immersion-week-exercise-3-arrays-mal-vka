function evenIndexes(word) {
  const arr = [];
  for (let i = 0; i < word.length; i += 2) {
    arr.push(word[i]);
  };
  return arr;
};


module.exports = evenIndexes;

/**Weryfikacja */

function verify(input, goal) {
  if (String(input) === String(goal)) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(evenIndexes("lol"), ['l', 'l']);
verify(evenIndexes("You're weird"), ['Y', 'u', 'r', ' ', 'e', 'r']);
verify(evenIndexes(""), []);