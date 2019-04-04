const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.split('');
  console.log(phrase);
}

PangramFinder.prototype.isPangram = function () {
  this.phrase.every(this.alphabet);
}

module.exports = PangramFinder;
