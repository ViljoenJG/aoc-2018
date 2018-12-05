const { range } = require('../utils');

const checkReaction = (a, b) => {
  if (!a || !b) return false;
  return a !== b && a.toLowerCase() === b.toLowerCase();
};

const part1 = input => {
  let polymers = input;
  let tmp = '';

  do {
    changed = false;
    let i = 0;
    while (i < polymers.length) {
      const a = polymers[i];
      const b = polymers[i + 1];

      if (checkReaction(a, b)) {
        changed = true;
        i += 2;
      } else {
        tmp += `${a || ''}`;
        i += 1;
      }
    }

    polymers = tmp;
    tmp = '';
  } while (changed);

  return polymers.length;
};

const part2 = input => {};

module.exports = { part1, part2 };
