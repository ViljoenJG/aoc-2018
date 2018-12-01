const { part1, part2 } = require('./solution');

const mockInput = `+1
-2
+3
+1`;

describe('Day 1', () => {
  describe('Part 1', () => {
    test('Part1 should produce 3', () => {
      expect(part1(mockInput)).toBe(3);
    });
  });

  describe('Part 2', () => {
    test('Part2 should produce 3', () => {
      expect(part2(mockInput)).toBe(2);
    });
  });
});
