const c = function (t) { // console
  try {
    console.log(t);
  } catch (e) {
    console.error('Cannot display this message')
  }
};
const co = function (t) {
  c(' - ' + t);
};
const space = function () {
  c(' ');
};
const s = function () {
  space();
};

const sn = function( spaces ){
  for( let i = 0; i < spaces; i++ ){
    space();
  }
};

module.exports = {
  c: c,
  co: co,
  space: space,
  s: s,
  sn: sn
};
