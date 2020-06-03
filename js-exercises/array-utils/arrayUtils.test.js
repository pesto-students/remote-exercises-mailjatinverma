// Write your own test cases.
import { forEach, map, filter, reduce } from "./arrayUtils";

// tests for forEach loop
describe("forEach", () => {
  test("should calculate the sum of elements of array", () => {
    let sum = 0;
    forEach([1, 2, 3, 4], function(value, index) {
      sum += value;
    });
    expect(sum).toBe(10);
  });
  test("should throw a type error", () => {
    let actualError;
    const expectedError = TypeError("1st argument is not a valid array");
    try {
      forEach({}, function(value, index) {});
    } catch (error) {
      actualError = error;
    }
    expect(actualError).toEqual(expectedError);
  });
  test("should use provided context via thisArg argument", () => {
    let object = {
      two: 2
    };
    let sum = 0;
    forEach(
      [1, 2, 3],
      function(value, index) {
        sum += this.two * value;
      },
      object
    );
    expect(sum).toBe(12);
  });
  test("should throw a type error", () => {
    let actualError;
    const expectedError = TypeError("callback is not a function");
    try {
      forEach([1, 2, 3, 4], "");
    } catch (error) {
      actualError = error;
    }
    expect(actualError).toEqual(expectedError);
  });
  test("should not execute callback on empty values of an array", () => {
    let sum = 0;
    let array = Array(5);
    array[0] = 1;
    array[3] = 2;
    forEach(array, function(value, index) {
      sum += value;
    });
    expect(sum).toBe(3);
  });
});

// tests for map function
describe("map", () => {
  test("should return correct array", () => {
    let expectedArray = [2, 4, 6, 8];
    let result = map([1, 2, 3, 4], function(value, index) {
      return value * 2;
    });
    expect(result).toEqual(expectedArray);
  });
  test("should throw a type error", () => {
    let actualError;
    const expectedError = TypeError("1st argument is not a valid array");
    try {
      map({}, function(value, index) {});
    } catch (error) {
      actualError = error;
    }
    expect(actualError).toEqual(expectedError);
  });
  test("should use provided context via thisArg argument", () => {
    let object = {
      two: 2
    };
    let expectArray = [2, 4, 6];
    const result = map(
      [1, 2, 3],
      function(value, index) {
        return this.two * value;
      },
      object
    );
    expect(result).toEqual(expectArray);
  });
  test("should throw a type error", () => {
    let actualError;
    const expectedError = TypeError("callback is not a function");
    try {
      map([1, 2, 3, 4], "");
    } catch (error) {
      actualError = error;
    }
    expect(actualError).toEqual(expectedError);
  });
  test("should not execute callback on empty values of an array", () => {
    let array = Array(5);
    array[0] = 1;
    array[3] = 2;
    let result = map(array, function(value, index) {
      return value * 2;
    });
    expect(result).toEqual([2, 4]);
  });
});

// tests for filter function
describe("filter", () => {
  test("should return array of even numbers", () => {
    let expectedArray = [2, 4, 6, 8];
    let result = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function(value, index) {
      return value % 2 === 0;
    });
    expect(result).toEqual(expectedArray);
  });
  test("should throw a type error", () => {
    let actualError;
    const expectedError = TypeError("1st argument is not a valid array");
    try {
      filter({}, function(value, index) {});
    } catch (error) {
      actualError = error;
    }
    expect(actualError).toEqual(expectedError);
  });
  test("should use provided context via thisArg argument", () => {
    let object = {
      three: 3
    };
    let expectArray = [3, 6, 9];
    const result = filter(
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      function(value, index) {
        return value % this.three === 0;
      },
      object
    );
    expect(result).toEqual(expectArray);
  });
  test("should throw a type error", () => {
    let actualError;
    const expectedError = TypeError("callback is not a function");
    try {
      filter([1, 2, 3, 4], "");
    } catch (error) {
      actualError = error;
    }
    expect(actualError).toEqual(expectedError);
  });
  test("should not execute callback on empty values of an array", () => {
    let array = Array(5);
    array[0] = 1;
    array[3] = 2;
    array[4] = 10;
    let result = filter(array, function(value, index) {
      return value < 10;
    });
    expect(result).toEqual([1, 2]);
  });
});

// tests for reduce function
describe("reduce", () => {
  test("should return correct number", () => {
    let result = reduce([1, 2, 3, 4], function(
      previousValue,
      currentValue,
      index
    ) {
      return previousValue + currentValue;
    });
  });
  test("should throw a type error", () => {
    let actualError;
    const expectedError = TypeError("1st argument is not a valid array");
    try {
      reduce({}, function(value, index) {});
    } catch (error) {
      actualError = error;
    }
    expect(actualError).toEqual(expectedError);
  });
  test("should throw a type error", () => {
    let actualError;
    const expectedError = TypeError("callback is not a function");
    try {
      filter([1, 2, 3, 4], "");
    } catch (error) {
      actualError = error;
    }
    expect(actualError).toEqual(expectedError);
  });
  test("should not execute callback on empty values of an array", () => {
    let array = Array(5);
    array[0] = 1;
    array[3] = 2;
    array[4] = 10;
    let result = reduce(array, function(previousValue, currentValue, index) {
      return previousValue + currentValue;
    });
    expect(result).toEqual(13);
  });
});