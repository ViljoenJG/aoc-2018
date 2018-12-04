const { range } = require('../utils');

const parseFile = fileData =>
  fileData
    .split('\n')
    .sort()
    .map(x => x.split('] ').map(y => y.replace(/[#\[\]]/, '')));

const part1Reducer = (acc, entry) => {
  const time = new Date(entry[0]);

  if (entry[1].includes('begins shift')) {
    const guard = entry[1].match(/\d+/)[0];
    acc['last'] = guard;
  }

  if (entry[1].includes('falls asleep')) {
    acc['start'] = time;
  }

  if (entry[1].includes('wakes up')) {
    const start = acc['start'];
    const end = time;
    const last = acc['last'];

    if (!acc[last]) acc[last] = {};

    for (let i of range(start.getMinutes(), end.getMinutes())) {
      if (!acc[last][i]) acc[last][i] = 0;
      if (!acc[last]['total']) acc[last]['total'] = 0;

      acc[last][i] += 1;
      acc[last]['total'] += 1;
    }
  }

  return acc;
};

const exclude_props = ['start', 'last'];
const part1 = input => {
  const parsed = parseFile(input);
  const result = parsed.reduce(part1Reducer, {});

  let max_guard = null;
  let max_minutes = 0;

  for (let guard in result) {
    if (exclude_props.includes(guard)) continue;
    let total_minutes = result[guard]['total'];
    if (total_minutes > max_minutes) {
      max_guard = guard;
      max_minutes = total_minutes;
    }
  }

  const max_result = Object.entries(result[max_guard]).reduce(
    (a, x) => {
      if (x[0] === 'total') return a;
      if (x[1] > a['max']) {
        a['max'] = x[1];
        a['minute'] = x[0];
      }

      return a;
    },
    { max: 0, minute: null },
  );

  return parseInt(max_guard, 10) * max_result['minute'];
};

const part2 = input => {
  const parsed = parseFile(input);
  const result = parsed.reduce(part1Reducer, {});

  let max = 0;
  let max_minute = 0;
  let max_guard = null;

  for (let guard in result) {
    if (exclude_props.includes(guard)) continue;
    const thisMax = Object.entries(result[guard]).reduce(
      (a, x) => {
        if (x[0] === 'total') return a;
        if (x[1] > a[1]) return x;
        return a;
      },
      [0, 0],
    );

    if (thisMax[1] > max) {
      max = thisMax[1];
      max_minute = thisMax[0];
      max_guard = guard;
    }
  }

  return parseInt(max_guard) * parseInt(max_minute);
};

module.exports = { part1, part2 };
