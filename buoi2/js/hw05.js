function calculator() {
  let temp = 0;
  return {
    add(a) {
      temp += a;
      return this;
    },
    subtract(a) {
      temp -= a;
      return this;
    },
    multi (a) {
      temp *= a;
      return this;
    },
    division(a) {
      if (a === 0) {
        return false;
      }
      temp /= a;
      return this;
    },
    result() {
      return temp;
    },
  };
}
console.log(calculator().add(5).subtract(2).multi(5).division(2).result());
