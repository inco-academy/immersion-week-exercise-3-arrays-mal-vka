function calcMinValue(arr) {
  return arr.sort((a, b) => a - b)[0];
};

function calcMaxValue(arr) {
  return arr.sort((a, b) => b - a)[0];
};

function calcSumValue(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  };
  return sum;
};

function calcAvgValue(arr) {
  let sum = calcSumValue(arr);
  average = sum / (arr.length);
  return average;
};

function averageMinMax(arr) {
  const minValue = calcMinValue(arr);
  const maxValue = calcMaxValue(arr);
  const avgValue = calcAvgValue(arr);
  return `Min: ${minValue} Max: ${maxValue} Average: ${avgValue}`;
};


module.exports = averageMinMax;

/**Weryfikacja */
function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(averageMinMax([-42, 0, 42]), 'Min: -42 Max: 42 Average: 0');
verify(averageMinMax([30, 20, 100]), 'Min: 20 Max: 100 Average: 50');
verify(averageMinMax([-23, -4, -12]), 'Min: -23 Max: -4 Average: -13');