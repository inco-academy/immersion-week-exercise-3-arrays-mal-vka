function displayFullName(name) {
  const lastName = name.split(" ")[name.split(" ").length - 1];
  console.log(`My name is ${lastName}, ${name}`);
  // return `My name is ${lastName}, ${name}`;
};


module.exports = displayFullName;

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(displayFullName("James Bond"), "My name is Bond, James Bond");
verify(displayFullName("Ada Lovelace"), "My name is Lovelace, Ada Lovelace");
verify(displayFullName("Salvador Felipe Jacinto Dalí"), "My name is Dalí, Salvador Felipe Jacinto Dalí");