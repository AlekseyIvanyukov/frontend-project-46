const stylish = (data, replacer = ' ', spacesCount = 1) => {
  const innerFunc = (deepData, depth = 1) => {
    if (typeof deepData !== 'object' || deepData === null) {
      return String(deepData);
    }
    const result = Object
      .entries(deepData)
      .map(([key, value]) => `${replacer.repeat(spacesCount * depth)}${key}: ${innerFunc(value, depth + 1)}`);
    return [
      '{',
      ...result,
      `${replacer.repeat((depth - 1) * spacesCount)}}`,
    ].join('\n');
  };
  return innerFunc(data);
};

export default stylish;
