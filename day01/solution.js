const parseInput = input => input.split('\n').map(x => parseInt(x, 10));
const calibrate = seed => input => input.reduce((a, c) => (a += c), seed);

const part1 = input => calibrate(0)(parseInput(input));

const used = {};
const checkUsed = val => {
  if (used[val]) {
    return true;
  }

  used[val] = true;
  return false;
};

const part2 = input => {
  const inputArr = parseInput(input);
  let val = 0;
  let idx = 0;

  while (true) {
    if (idx === inputArr.length) idx = 0;
    val += inputArr[idx++];
    if (checkUsed(val)) return val;
  }
};

module.exports = { part1, part2 };
