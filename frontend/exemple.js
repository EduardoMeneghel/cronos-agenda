function sum(a, b) {
    return a + b;
  }
  
  if (typeof module !== 'undefined') {
    module.exports.sum = sum
  }