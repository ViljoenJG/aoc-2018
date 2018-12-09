const parseFile = fileData => fileData.split(' ').map(x => +x);

const part1 = input => {
  const items = parseFile(input);

  let nodes = [{ entries: items.shift(), meta: items.shift() }];
  let total = 0;

  while (items.length) {
    let current = nodes[nodes.length - 1];
    if (current.entries > 0) {
      current.entries--;
      nodes.push({ entries: items.shift(), meta: items.shift() });
    } else if (current.meta > 0) {
      total += items.shift();
      current.meta--;
    } else {
      nodes.pop();
    }
  }

  return total;
};

const getNode = (items, parent = null) => ({
  value: 0,
  entries: items.shift(),
  metaCount: items.shift(),
  meta: [],
  children: [],
  parent: parent,
});

const calculateNodeValue = node => {
  if (node.children.length) {
    let value = node.value;
    for (let metaItem of node.meta) {
      if (metaItem > 0 && node.children.length >= metaItem) {
        value += node.children[metaItem - 1].value;
      }
    }
    return value;
  } else {
    return node.meta.reduce((a, b) => a + b);
  }
};

const part2 = input => {
  let items = parseFile(input);

  let root = getNode(items);
  let current = root;

  while (items.length) {
    if (current.entries > 0) {
      const newNode = getNode(items, current);

      current.children.push(newNode);
      current.entries--;
      current = newNode;
    } else if (current.metaCount > 0) {
      current.meta.push(items.shift());
      current.metaCount--;
    } else {
      current.value = calculateNodeValue(current);
      current = current.parent;
    }
  }

  return calculateNodeValue(root);
};

module.exports = { part1, part2 };
