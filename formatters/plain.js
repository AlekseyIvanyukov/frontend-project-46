import _ from 'lodash';

const getChild = (child) => {
  if (_.isPlainObject(child)) {
    return '[complex value]';
  }
  if (typeof child === 'string') {
    return `'${child}'`;
  }
  return `${child}`;
};

const plain = (data, acc = '') => {
  const keys = Object.keys(data);
  const result = keys.map((key) => {
    const obj = data[key];

    if (obj.type === 'parent') {
      return plain(obj.children, `${acc}${obj.key}.`);
    }

    if (obj.type === 'added') {
      return `Property '${acc}${obj.key}' was added with value: ${getChild(obj.value)}`;
    }

    if (obj.type === 'deleted') {
      return `Property '${acc}${obj.key}' was removed`;
    }

    if (obj.type === 'diffValue') {
      return `Property '${acc}${obj.key}' was updated. From ${getChild(obj.oldValue)} to ${getChild(obj.newValue)}`;
    }
    return null;
  });
  return result.filter((line) => line !== null).join('\n');
};

export default plain;
