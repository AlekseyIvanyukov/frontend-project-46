import _ from 'lodash';

const buildTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const unionSortedKeys = _.sortBy(_.union(keys1, keys2));

  return unionSortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return {
        key,
        status: 'added',
        value: data2[key],
      };
    } if (!_.has(data2, key)) {
      return {
        key,
        status: 'deleted',
        value: data1[key],
      };
    } if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        key,
        status: 'parent',
        children: buildTree(data1[key], data2[key]),
      };
    } if (!_.isEqual(data1[key], data2[key])) {
      return {
        key,
        status: 'updated',
        value1: data1[key],
        value2: data2[key],
      };
    }

    return {
      key,
      status: 'unchanged',
      value: data1[key],
    };
  });
};

export default buildTree;
