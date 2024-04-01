const n = 100;
const oddNumbers = [];

for (let i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    const oddNumber = i;
    oddNumbers.push(oddNumber);
  }
}

console.log(oddNumbers);
