const UpperCaser = function (words) {
  this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
  const wordArray = this.words.map((word) => {
    return word.toUpperCase()
  });
  return wordArray
}

module.exports = UpperCaser;
