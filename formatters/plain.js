import _ from 'lodash';

export const getDataToString = (data) => {
  if (_.isObject(data)) {
    return '[complex value]';
  } if (typeof data === 'string') {
    return `${data}`;
  }

  return String(data);
};

const getPlain = (tree, path = []) => tree
  .map((item) => {
    const { key } = item;
    const newProp = [...path, key].join('.');

    switch (item.status) {
      case 'added':
        return `Property '${newProp}' was added with value: ${getDataToString(item.value)}`;
      case 'deleted':
        return `Property '${newProp}' was removed`;
      case 'updated':
        return `Property '${newProp}' was updated. From ${getDataToString(item.value1)} to ${getDataToString(item.value2)}`;
      case 'unchanged':
        return null;
      case 'parent':
        return getPlain(item.children, [...path, key]);
      default:
        throw new Error(`Unexpected status: ${item.status}`);
    }
  })
  .filter((item) => item !== null)
  .join('\n');

export default getPlain;
