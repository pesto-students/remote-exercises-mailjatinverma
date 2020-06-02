import { MyPromise } from "./allSettled";

describe("MyPromise", () => {
  test("should return an instance of MyPromise", () => {
    const p1 = new MyPromise((resolve, reject) => {
      resolve(null);
    });
    expect(p1 instanceof MyPromise).toBe(true);
  });
  test("should be chainable", () => {
    const addFiveToNumber = number => number + 5;
    const p1 = new MyPromise((resolve, reject) => {
      resolve(5);
    });
    expect(p1.then(addFiveToNumber).then(addFiveToNumber)).resolves.toEqual(15);
  });
  test("should call resolve only once", () => {
    const addFiveToNumber = number => number + 5;
    const p1 = new MyPromise((resolve, reject) => {
      resolve(5);
      resolve(10);
    });
    expect(p1).resolves.toEqual(5);
  });
  test("Promise call should return an array of values from promises", () => {
    const p1 = new MyPromise(res => res(1));
    const p2 = 2;
    const p3 = MyPromise.resolve(3);
    return expect(MyPromise.all([p1, p2, p3])).resolves.toEqual([1, 2, 3]);
  });
  test("Promise return status of promises in an array", () => {
    const result = [
      { status: "fulfilled", value: 3 },
      { status: "rejected", reason: 10 },
      { status: "fulfilled", value: 30 }
    ];
    const p1 = MyPromise.resolve(3);
    const p2 = new MyPromise((resolve, reject) => reject(10));
    expect(MyPromise.allSettled([p1, p2, 30])).resolves.toStrictEqual(result);
  });
});