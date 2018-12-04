const { range } = require('../utils');

const parseFile = input =>
  input.split('\n').map(x => {
    const split = x.replace(/[@:#]/g, '').split(' ');
    return [split[0], ...split[2].split(','), ...split[3].split('x')].map(y =>
      parseInt(y, 10),
    );
  });

const part1 = input => {
  const claims = parseFile(input);
  claims;
  const fabricMatrix = {};
  for (let claim of claims) {
    let [id, x, y, dx, dy] = claim;
    for (let a of range(x, x + dx)) {
      for (let b of range(y, y + dy)) {
        let key = `${a}-${b}`;
        if (!fabricMatrix[key]) fabricMatrix[key] = 0;
        fabricMatrix[key] += 1;
      }
    }
  }

  return Object.values(fabricMatrix).reduce((a, x) => {
    if (x > 1) a++;
    return a;
  }, 0);
};

const part2 = input => {
  const claims = parseFile(input);
  const fabricMatrix = {};
  const noOverlap = new Set();

  for (let claim of claims) {
    let [id, x, y, dx, dy] = claim;
    noOverlap.add(id);

    for (let a of range(x, x + dx)) {
      for (let b of range(y, y + dy)) {
        let key = `${a}-${b}`;

        if (!fabricMatrix[key]) {
          fabricMatrix[key] = id;
        } else {
          noOverlap.delete(id);
          noOverlap.delete(fabricMatrix[key]);
        }
      }
    }
  }

  return noOverlap.values().next().value;
};

module.exports = { part1, part2 };
