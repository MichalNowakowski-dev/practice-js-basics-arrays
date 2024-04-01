const numbers = [1, 2, 3, 4, 5, 6, 7];

function sumEvenNumbers(array) {
  const result = array
    .filter((number) => number % 2 === 0)
    .reduce((acc, curr) => acc + curr);

  return result;
}

console.log(sumEvenNumbers(numbers));
