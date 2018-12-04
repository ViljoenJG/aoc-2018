const { part1, part2 } = require('./solution');

const mockInput = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`;

describe('Day 3', () => {
  test('Part1', () => {
    expect(part1(mockInput)).toBe(4);
  });

  test('Part2', () => {
    expect(part2(mockInput)).toBe(3);
  });
});
