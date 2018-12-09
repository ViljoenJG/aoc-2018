const { part1, part2 } = require('./solution');

const mockInput = `Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.`;

describe('Day 7', () => {
  test('Part1', () => {
    expect(part1(mockInput)).toBe('CABDFE');
  });
});
