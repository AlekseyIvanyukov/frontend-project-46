export const getDataToString = (data) => {
  if (data === null) {
    return String(data);
  } if (typeof data === 'string') {
    return `'${data}'`;
  } if (typeof data === 'object') {
    return '[complex value]';
  }

  return String(data);
};

const getPlain = (tree, path = []) => tree
  .map((item) => {
    const {
      key, status, children, value, oldValue, newValue,
    } = item;
    const newProp = [...path, key].join('.');

    switch (status) {
      case 'added':
        return `Property '${newProp}' was added with value: ${getDataToString(value)}`;
      case 'deleted':
        return `Property '${newProp}' was removed`;
      case 'updated':
        return `Property '${newProp}' was updated. From ${getDataToString(oldValue)} to ${getDataToString(newValue)}`;
      case 'unchanged':
        return null;
      case 'parent':
        return getPlain(children, [...path, key]);
      default:
        throw new Error(`Unexpected status: ${status}`);
    }
  })
  .filter((item) => item !== null)
  .join('\n');

export default getPlain;
