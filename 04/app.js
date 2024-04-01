const years = [1980, 1934, 2002, 2019];

const yearsDifference = years.map((year) => {
  const actualYear = new Date().getFullYear();
  return actualYear - year;
});

console.log(yearsDifference);
