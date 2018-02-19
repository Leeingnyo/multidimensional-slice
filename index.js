// function multipleSlice(array, ...args) {
function multipleSlice(array) {
  var slice = Array.prototype.slice, args = slice.call(arguments, 1);

  function _multipleSlice() {
    if (arguments.length === 0) return this;
    if (arguments.length <= 2) return slice.apply(this, arguments);
    var args = slice.call(arguments), o = args.slice(2);
    return slice.apply(this, args.slice(0, 2)).map(a => {
      return _multipleSlice.apply(a, o);
    });
  }
  return _multipleSlice.apply(array, args);
}
