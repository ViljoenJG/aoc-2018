const { part1, part2 } = require('./solution');

const mockInput = `dabAcCaCBAcCcaDA`;

describe('Day 5', () => {
  test('Part1', () => {
    expect(part1(mockInput)).toBe(10);
  });

  test('Part2', () => {
    expect(part2(mockInput)).toBe(4);
  });
});
