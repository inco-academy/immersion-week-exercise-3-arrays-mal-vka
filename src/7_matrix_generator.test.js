const matrixGen = require("./7_matrix_generator");

test("Matrix Generator (1)", () => {
  expect(matrixGen(1, 5)).toStrictEqual([[1, 2, 3, 4, 5]]);
});

test("Matrix Generator (2)", () => {
  expect(matrixGen(5, 4)).toStrictEqual([
    [1, 2, 3, 4],
    [2, 4, 6, 8],
    [3, 6, 9, 12],
    [4, 8, 12, 16],
    [5, 10, 15, 20],
  ]);
});

test("Matrix Generator (3)", () => {
  expect(matrixGen(3, 6)).toStrictEqual([
    [1, 2, 3, 4, 5, 6],
    [2, 4, 6, 8, 10, 12],
    [3, 6, 9, 12, 15, 18],
  ]);
});

test("Matrix Generator (4)", () => {
  expect(matrixGen(0, 0)).toStrictEqual([]);
});
