const { part1, part2 } = require('./solution');

describe('Day 9', () => {
  test('Case 1', () => {
    expect(part1('10 players; last marble is worth 1618 points')).toBe(8317);
  });
  test('Case 2', () => {
    expect(part1('13 players; last marble is worth 7999 points')).toBe(146373);
  });
  test('Case 3', () => {
    expect(part1('17 players; last marble is worth 1104 points')).toBe(2764);
  });
  test('Case 4', () => {
    expect(part1('21 players; last marble is worth 6111 points')).toBe(54718);
  });
  test('Case 5', () => {
    expect(part1('30 players; last marble is worth 5807 points')).toBe(37305);
  });
});
