const checkReaction = (a, b) => {
  if (!a || !b) return false;
  return a !== b && a.toLowerCase() === b.toLowerCase();
};

const part1 = input => {
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

  return polymers.length;
};

const part2 = input => {
  let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
  let tmp = '';
  let min = input.length;

  for (const letter of alphabet) {
    let regex = new RegExp(`${letter}`, 'gi');
    let polymers = input.replace(regex, '');

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

    if (polymers.length < min) min = polymers.length;
  }

  return min;
};

module.exports = { part1, part2 };
