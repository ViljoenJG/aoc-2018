const parseFile = fileData => fileData.split('\n');

const getParts = x =>
  `${x[0].toLowerCase()}${x.slice(1)}`.replace(/[\sa-z\W]/g, '').split('');

const part1 = input => {
  const lines = parseFile(input);
  let steps = {};
  for (let line of lines) {
    let parts = getParts(line);
    let first = parts[0];
    let second = parts[1];

    if (!steps[first]) {
      steps[first] = { prev: [] };
    }
    if (!steps[second]) {
      steps[second] = { prev: [] };
    }

    steps[second].prev.push(first);
  }

  let result = '';
  let cont = true;
  while (cont) {
    cont = false;
    let candidates = [];

    for (let step in steps) {
      let info = steps[step];

      if (!info.marked) {
        let satisfied = true;
        for (let prevStep of info.prev) {
          if (result.indexOf(prevStep) === -1) {
            satisfied = false;
          }
        }

        if (satisfied) {
          cont = true;
          candidates.push({ letter: step, info });
        }
      }
    }

    if (candidates.length) {
      candidates = candidates.sort((a, b) => a.letter > b.letter);
      result += candidates[0].letter;
      candidates[0].info.marked = true;
    }
  }

  return result;
};

const part2 = input => {
  const lines = parseFile(input);
  let steps = {};
  for (let line of lines) {
    let parts = getParts(line);
    let first = parts[0];
    let second = parts[1];

    if (!steps[first]) {
      steps[first] = { prev: [] };
    }
    if (!steps[second]) {
      steps[second] = { prev: [] };
    }

    steps[second].prev.push(first);
  }

  let workers = [];

  for (let i = 0; i < 5; i++) {
    workers.push({ step: '', remaining: 0 });
  }

  let stepCount = 0;
  for (let step in steps) {
    stepCount++;
  }

  let result = '';
  let completedSteps = 0;
  let time = 0;

  while (completedSteps < stepCount) {
    let candidates = [];

    for (let step in steps) {
      let info = steps[step];

      if (!info.marked) {
        let satisfied = true;
        for (let prevStep of info.prev) {
          if (result.indexOf(prevStep) === -1) {
            satisfied = false;
          }
        }

        if (satisfied) {
          candidates.push({ letter: step, info });
        }
      }
    }

    if (candidates.length) {
      candidates = candidates.sort((a, b) => a.letter > b.letter);
    }

    let finishedJob = false;

    for (let worker of workers) {
      if (worker.remaining <= 0) {
        if (worker.step) {
          result += worker.step;
          completedSteps++;
          worker.step = '';
          finishedJob = true;
        }

        if (candidates.length) {
          job = candidates.pop();
          job.info.marked = true;
          worker.step = job.letter;
          worker.remaining = job.letter.charCodeAt(0) - 4;
        }
      }
    }

    if (!finishedJob) {
      time++;
      for (let worker of workers) {
        worker.remaining--;
      }
    }
  }

  return time;
};

module.exports = { part1, part2 };
