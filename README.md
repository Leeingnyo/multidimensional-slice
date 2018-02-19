# multidimensional-slice

It just call `Array.prototype.slice` function recursively.

저는 그냥 `Array.prototype.slice` 를 recursive 하게 돌린 것 밖에 없습니다.

Use [numjs](https://github.com/nicolaspanel/numjs/) instead of this.

## How to Use

```js
multipleSlice(array, first-start-index, first-end-index, second-start-index, second-end-index, ...);
```

## Example

```js
var arr = [];
for (let i = 0; i < 32; i++) {
  arr[i] = [];
  for (let j = 0; j < 32; j++) {
    arr[i][j] = [];
    for (let l = 0; l < 64; l++) {
      arr[i][j][l] = i * 32 * 64 + j * 64 + l;
    }
  }
}
// 'arr' is a 32 * 32 * 64 array.

var res = multipleSlice(arr, 0, 6, 1, 3, 4, 6);
// arr[0:6, 1:3, 4:6]

/* the result is 6 * 2 * 2 array
[
  [ [ 68, 69 ], [ 132, 133 ] ],
  [ [ 2116, 2117 ], [ 2180, 2181 ] ],
  [ [ 4164, 4165 ], [ 4228, 4229 ] ],
  [ [ 6212, 6213 ], [ 6276, 6277 ] ],
  [ [ 8260, 8261 ], [ 8324, 8325 ] ],
  [ [ 10308, 10309 ], [ 10372, 10373 ] ]
]
*/
```
