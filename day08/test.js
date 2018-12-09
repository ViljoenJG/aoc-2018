const { part1, part2 } = require('./solution');

const mockInput = `2 3 0 3 10 11 12 1 1 0 1 99 2 1 1 2`;

describe('Day 8', () => {
  test('Part1', () => {
    expect(part1(mockInput)).toBe(138);
  });

  test('Part2', () => {
    expect(part2(mockInput)).toBe(66);
  });
});
