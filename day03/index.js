const fs = require('fs');
const path = require('path');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), {
    encoding: 'utf-8',
  })
  .trim();

const { part1, part2 } = require('./solution');

const solution1 = part1(input);
console.log(solution1);

const solution2 = part2(input);
console.log(solution2);
