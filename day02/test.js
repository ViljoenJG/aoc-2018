const { part1, part2 } = require('./solution');

const mockInput = `abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`;

const mockInput2 = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`;

describe('Day 2', () => {
  describe('Part 1', () => {
    test('Part1', () => {
      expect(part1(mockInput)).toBe(12);
    });
  });

  describe('Part 2', () => {
    test('Part2', () => {
      expect(part2(mockInput2)).toBe('fgij');
    });
  });
});
