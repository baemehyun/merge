import { merge } from "../src/merge";

test("merges three collections correctly", () => {
  const c1 = [3, 4, 7];
  const c2 = [9, 5, 2];
  const c3 = [1, 6, 8];
  const result = merge(c1, c2, c3);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
