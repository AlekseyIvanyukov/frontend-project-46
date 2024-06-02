import _ from 'lodash';

const getKeys = (data) => Object.keys(data);

const buildTree = (data1, data2) => {
  const dataUnion = _.union(getKeys(data1), getKeys(data2));
  const sortedUnion = _.sortBy(dataUnion);

  return sortedUnion.map((element) => {
    if (_.has(data1, element)
    && _.has(data2, element)
    && _.isPlainObject(data1[element])
    && _.isPlainObject(data2[element])) {
      return {
        type: 'parent',
        element,
        children: buildTree(data1[element], data2[element]),
      };
    }
    if (_.has(data1, element)) {
      if (!_.has(data2, element)) {
        return {
          type: 'deleted',
          element,
          value: data1[element],
        };
      }
    }
    if (data1[element] === data2[element]) {
      return {
        type: 'same',
        element,
        oldValue: data1[element],
        newValue: data2[element],
      };
    }
    return {
      type: 'added',
      element,
      value: data2[element],
    };
  });
};

export default buildTree;
