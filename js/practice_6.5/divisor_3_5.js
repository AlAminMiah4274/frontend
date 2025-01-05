const num = 50;

const findDivisor = (n) => {
  const divisors = [];

  for (let i = 0; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      divisors.push(i);
    }
  }

  return divisors;
};

console.log(findDivisor(num));
