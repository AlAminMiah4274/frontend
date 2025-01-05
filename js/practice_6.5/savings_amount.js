const paymentArr = [800, 3000, 3500, 1500, 4000, 5000, 640, 1200];

const monthlySavings = (allPayment, livingCost) => {
  if (!Array.isArray(allPayment) || !Number.isInteger(livingCost)) {
    return "invalid input";
  }

  let count = 0;
  let totalEarnings = 0;

  for (let i = 0; i < allPayment.length; i++) {
    totalEarnings += allPayment[i];

    if (allPayment[i] >= 3000) {
      count++;
    }
  }

  let taxPayableAmount = 3000 * count;
  const tax = taxPayableAmount * (20 / 100);
  const savingsAmount = totalEarnings - (tax + livingCost);

  if (savingsAmount >= 0) {
    return savingsAmount;
  } else {
    return "earn more";
  }
};

console.log(monthlySavings([900, 2700, 3400], 10000));
