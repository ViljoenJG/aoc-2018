const parseFile = fileData => fileData.split('\n');

function Node(value, next = this, prev = this) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

const play = (numPlayers, lastMarble) => {
  const players = new Array(numPlayers).fill(0);
  let current = new Node(0);
  let currentPlayer = numPlayers - 1;

  for (let num = 1; num <= lastMarble; num++) {
    currentPlayer = (currentPlayer + 1) % numPlayers;
    if (num % 23 === 0) {
      players[currentPlayer] += num;

      let target = current;
      for (let i = 0; i < 7; i++) {
        target = target.prev;
      }

      players[currentPlayer] += target.value;
      target.next.prev = target.prev;
      target.prev.next = target.next;
      current = target.next;
    } else {
      let target = current.next;
      let newMarble = new Node(num, target.next, target);
      target.next.prev = newMarble;
      target.next = newMarble;
      current = newMarble;
    }
  }

  return Math.max(...players);
};

const part1 = input => {
  const parsed = parseFile(input)[0].match(/\d+/g);
  return play(...parsed.map(x => +x));
};

const part2 = input => {
  const parsed = parseFile(input)[0].match(/\d+/g);
  return play(+parsed[0], +parsed[1] * 100);
};

module.exports = { part1, part2 };
