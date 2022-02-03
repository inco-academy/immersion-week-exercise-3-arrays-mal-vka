module.exports = removeDouble;

function removeDouble(arr) {
  const unique = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!unique.includes(arr[i])) {
      unique.unshift(arr[i]);
    };
  };
  // const unique = new Set(arr); //nie zachowuje kolejności  
  console.log(unique);
  return unique;
};


/**Weryfikacja */

function verify(input, goal) {
  if (String(input) === String(goal)) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(removeDouble(["suit", "clock", "butter", "suit"]), ['clock', 'butter', 'suit']);
verify(removeDouble(["hello", "hello", 23, -3, 23, "hello"]), [-3, 23, 'hello']);
