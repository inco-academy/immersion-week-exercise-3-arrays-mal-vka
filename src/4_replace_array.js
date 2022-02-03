function replaceArray(arr) {
  for (const [index, word] of arr.entries()) {
    if ((word[0] === "h") || (word[0] === "H")) {
      arr[index] = word.toUpperCase();
    };
  };
  return arr;
};


module.exports = replaceArray;

/**Weryfikacja */

function verify(input, goal) {
  if (String(input) === String(goal)) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(replaceArray(["banana", "suit", "hammer"]), ['banana', 'suit', 'HAMMER']);
verify(replaceArray(["Hello", "there"]), ['HELLO', 'there']);
verify(replaceArray(["Hey!", "hey..."]), ['HEY!', 'HEY...']);