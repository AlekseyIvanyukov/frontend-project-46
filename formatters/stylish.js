const stringify = (data, depth, replacer = ' ', spacesCount = 4) => {
  if (typeof data !== 'object' || data === null) {
    return String(data);
  }
  const identation = replacer.repeat(spacesCount * depth);
  const toString = Object
    .entries(data)
    .map(([key, value]) => `${identation}  ${key}: ${stringify(value, depth + 1)}`);
  return `{\n${toString.join('\n')}\n${identation}}`;
};

const stylish = (tree, replacer = ' ', spacesCount = 4) => {
  const iter = (deepTree, depth) => {
    const identation = replacer.repeat(spacesCount * depth);

    if (typeof deepTree !== 'object') {
      return String(deepTree);
    }
    const result = deepTree
      .map((item) => {
        switch (item.status) {
          case 'added':
            return `${identation}+ ${item.key}: ${stringify(item.value, depth + 1)}`;
          case 'deleted':
            return `${identation}- ${item.key}: ${stringify(item.value, depth + 1)}`;
          case 'updated':
            return `${identation}- ${item.key}: ${stringify(item.oldValue, depth + 1)}\n${identation}+ ${item.key}: ${stringify(item.newValue, depth + 1)}`;
          case 'unchanged':
            return `${identation}  ${item.key}: ${stringify(item.value, depth + 1)}`;
          case 'parent':
            return `${identation}${item.key}: ${iter(item.children, depth + 1)}`;
          default:
            throw new Error(`Unexpexted status: ${item.status}`);
        }
      });
    return `{\n${result.join('\n')}\n${identation}}`;
  };
  return iter(tree, 1);
};

export default stylish;
