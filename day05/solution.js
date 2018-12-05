const checkReaction = (a, b) => {
  if (!a || !b) return false;
  return a !== b && a.toLowerCase() === b.toLowerCase();
};

const react = input => {
  let polymers = input;
  let tmp = '';
  let changed;

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

  return polymers;
};

const part1 = input => {
  const reactionResult = react(input);
  return reactionResult.length;
};

const part2 = input => {
  let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
  let min = input.length;

  for (const letter of alphabet) {
    let regex = new RegExp(`${letter}`, 'gi');
    let polymers = input.replace(regex, '');
    const result = react(polymers);

    if (result.length < min) min = result.length;
  }

  return min;
};

module.exports = { part1, part2 };
