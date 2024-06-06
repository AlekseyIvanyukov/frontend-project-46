const stringify = (data, depth, replacer = ' ', spacesCount = 4) => {
  if (typeof data !== 'object' || data === null) {
    return `${data}`;
  }
  const indentSize = depth * spacesCount;
  const currentIndent = replacer.repeat(indentSize);
  const bracketIndent = replacer.repeat(indentSize - spacesCount);
  const toString = Object.entries(data).flatMap(([key, value]) => `${currentIndent}${key}: ${stringify(value, depth + 1)}`);
  return ['{', ...toString, `${bracketIndent}}`].join('\n');
};

const stylish = (tree, replacer = ' ', spacesCount = 4) => {
  const iter = (deepTree, depth) => {
    if (typeof deepTree !== 'object') {
      return `${deepTree}`;
    }
    const indentSize = spacesCount * depth;
    const gapSize = 2;
    const currentIndent = replacer.repeat(indentSize - gapSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);
    const result = deepTree.flatMap((item) => {
      const deepChildren = stringify(item.value, depth + 1);
      switch (item.status) {
        case 'added':
          return `${currentIndent}+ ${item.key}: ${deepChildren}`;
        case 'deleted':
          return `${currentIndent}- ${item.key}: ${deepChildren}`;
        case 'updated':
          return `${currentIndent}- ${item.key}: ${stringify(item.oldValue, depth + 1)}\n${currentIndent}+ ${item.key}: ${stringify(item.newValue, depth + 1)}`;
        case 'unchanged':
          return `${currentIndent}  ${item.key}: ${deepChildren}`;
        case 'parent':
          return `${currentIndent}  ${item.key}: ${iter(item.children, depth + 1)}`;
        default:
          throw new Error(`Unexpected status: ${item.status}`);
      }
    });
    return ['{', ...result, `${bracketIndent}}`].join('\n');
  };
  return iter(tree, 1);
};
export default stylish;
