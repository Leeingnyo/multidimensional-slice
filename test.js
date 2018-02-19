const assert = require('assert');

// exports
function multipleSlice(array) {
  var slice = Array.prototype.slice, isArray = Array.isArray, args = slice.call(arguments, 1);

  function slicef() {
    if (!isArray(this)) throw new Error('target element is not an array.');
    if (arguments.length === 0) return this;
    if (arguments.length <= 2) return slice.apply(this, arguments);
    var args = slice.call(arguments), o = args.slice(2);
    return slice.apply(this, args.slice(0, 2)).map(a => {
      return slicef.apply(a, o);
    });
  }
  return slicef.apply(array, args);
}

var a = [];
for (let i = 0; i < 32; i++) {
  a[i] = [];
  for (let j = 0; j < 32; j++) {
    a[i][j] = [];
    for (let l = 0; l < 64; l++) {
      a[i][j][l] = i * 32 * 64 + j * 64 + l;
    }
  }
}

var res = multipleSlice(a, 0, 6, 1, 3, 4, 6);
var exp = [
  [
    [0 * 32 * 64 + 1 * 64 + 4, 0 * 32 * 64 + 1 * 64 + 5],
    [0 * 32 * 64 + 2 * 64 + 4, 0 * 32 * 64 + 2 * 64 + 5]
  ],
  [
    [1 * 32 * 64 + 1 * 64 + 4, 1 * 32 * 64 + 1 * 64 + 5],
    [1 * 32 * 64 + 2 * 64 + 4, 1 * 32 * 64 + 2 * 64 + 5]
  ],
  [
    [2 * 32 * 64 + 1 * 64 + 4, 2 * 32 * 64 + 1 * 64 + 5],
    [2 * 32 * 64 + 2 * 64 + 4, 2 * 32 * 64 + 2 * 64 + 5]
  ],
  [
    [3 * 32 * 64 + 1 * 64 + 4, 3 * 32 * 64 + 1 * 64 + 5],
    [3 * 32 * 64 + 2 * 64 + 4, 3 * 32 * 64 + 2 * 64 + 5]
  ],
  [
    [4 * 32 * 64 + 1 * 64 + 4, 4 * 32 * 64 + 1 * 64 + 5],
    [4 * 32 * 64 + 2 * 64 + 4, 4 * 32 * 64 + 2 * 64 + 5]
  ],
  [
    [5 * 32 * 64 + 1 * 64 + 4, 5 * 32 * 64 + 1 * 64 + 5],
    [5 * 32 * 64 + 2 * 64 + 4, 5 * 32 * 64 + 2 * 64 + 5]
  ]
];

assert.deepEqual(res, exp);
