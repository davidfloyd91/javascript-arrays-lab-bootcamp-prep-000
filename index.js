var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here
function destructivelyAppendKitten(name) {
  kittens.push(name);
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
}
destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
}
