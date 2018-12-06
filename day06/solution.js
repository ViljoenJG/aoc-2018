const parseFile = fileData =>
  fileData.split('\n').map(x => x.match(/-?\d+/g).map(y => parseInt(y)));

const dist = (x, y, a, b) => Math.abs(x - a) + Math.abs(y - b);

const part1 = input => {
  const parsed = parseFile(input);

  let area = [];
  for (let i in parsed) {
    area.push(0);
  }

  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < 500; j++) {
      let minDist = 99999;
      let countThis = false;
      let minI = 0;

      for (let k in parsed) {
        let coord = parsed[k];
        let d = dist(coord[0], coord[1], i, j);
        if (d < minDist) {
          minDist = d;
          countThis = true;
          minI = k;
        } else if (d == minDist) {
          countThis = false;
        }
      }

      if (countThis) {
        area[minI]++;
        if (i == 0 || j == 0 || i == 499 || j == 499) {
          area[minI] = -100000;
        }
      }
    }
  }

  return Math.max(...area);
};

const part2 = (input, limit = 10000) => {
  const parsed = parseFile(input);

  let area = [];
  for (let i in parsed) {
    area.push(0);
  }

  let res = 0;
  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < 500; j++) {
      let distance = 0;
      for (let k in parsed) {
        let coord = parsed[k];
        let d = dist(coord[0], coord[1], i, j);
        if (isNaN(d)) continue;
        distance += d;
      }

      if (distance < limit) {
        res++;
      }
    }
  }

  return res;
};

module.exports = { part1, part2 };
