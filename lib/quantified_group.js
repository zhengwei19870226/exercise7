module.exports = function (str) {
  // TODO
  return /^(0x[A-Za-z0-9]{2}\s+){8}$/.test(str);
}