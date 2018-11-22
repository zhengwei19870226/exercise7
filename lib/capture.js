module.exports = function (str) {
  // TODO
  let result = /\bx=(\d+)/.exec(str);
  return result && result[1];

}