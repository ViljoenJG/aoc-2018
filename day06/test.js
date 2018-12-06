const { part1, part2 } = require('./solution');

const testInput = `1, 1
1, 6
8, 3
3, 4
5, 5
8, 9`;

describe('Day 6', () => {
  test('Part1', () => {
    expect(part1(testInput)).toBe(17);
  });

  test('Part2', () => {
    expect(part2(testInput, 32)).toBe(16);
  });
});
