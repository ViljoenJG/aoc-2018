const parseFile = fileData => fileData.split('\n');

const processItem = item => {
  const map = item.split('').reduce((a, x) => {
    if (!a[x]) a[x] = 0;
    a[x] += 1;
    return a;
  }, {});

  return Object.values(map).reduce((a, x) => {
    if (a.dos && a.tres) return a;
    if (x === 2) a.dos = true;
    if (x === 3) a.tres = true;
    return a;
  }, {});
};

const part1 = fileData => {
  let input = parseFile(fileData);

  let twos = 0;
  let threes = 0;

  for (let item of input) {
    let { dos, tres } = processItem(item);
    if (dos) twos += 1;
    if (tres) threes += 1;
  }
  return twos * threes;
};

const compare = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    let tmpA = `${a.slice(0, i)}${a.slice(i + 1)}`;
    let tmpB = `${b.slice(0, i)}${b.slice(i + 1)}`;
    if (tmpA === tmpB) return tmpA;
  }
};

const part2 = fileData => {
  const input = parseFile(fileData);

  for (let a of input) {
    for (let b of input) {
      if (a === b) continue;
      let res = compare(a, b);
      if (res) return res;
    }
  }
};

module.exports = { part1, part2 };
