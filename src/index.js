module.exports = function zeros(expression) {
  const splitted = expression.split('*');

  const result = splitted.map((item) => {
    let sum = BigInt(1);
    const number = parseInt(item);

    const isDoubleFactorial = item.includes('!!');
    const isEven = number % 2 === 0;

    for (let i = (isDoubleFactorial && isEven) ? 2 : 1; i <= number; isDoubleFactorial ? i += 2 : i++) {
      sum = BigInt(sum) * BigInt(i);
    }
    return sum;
  });

  const endZeroes = /0+$/.exec(result.reduce((a, b) => BigInt(a) * BigInt(b)));
  return endZeroes ? endZeroes[0].length : 0;
};
