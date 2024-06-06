/* import _ from 'lodash';

const buildTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const unionSortedKeys = _.sortBy(_.union(keys1, keys2));

  return unionSortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return { status: 'added', key, value: data2[key] };
    } if (!_.has(data2, key)) {
      return { status: 'deleted', key, value: data1[key] };
    } if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { status: 'parent', key, children: buildTree(data1[key], data2[key]) };
    } if (!_.isEqual(data1[key], data2[key])) {
      return {
        status: 'updated', key, oldValue: data1[key], newValue: data2[key],
      };
    } return { status: 'unchanged', key, value: data1[key] };
  });
};

export default buildTree;
 */

import _ from 'lodash';

const buildTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const unionSortedKeys = _.sortBy(_.union(keys1, keys2));

  return unionSortedKeys.map((key) => {
    let result;
    if (!_.has(data1, key)) {
      result = { status: 'added', key, value: data2[key] };
    } else if (!_.has(data2, key)) {
      result = { status: 'deleted', key, value: data1[key] };
    } else if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      result = { status: 'parent', key, children: buildTree(data1[key], data2[key]) };
    } else if (!_.isEqual(data1[key], data2[key])) {
      result = {
        status: 'updated', key, oldValue: data1[key], newValue: data2[key],
      };
    } else {
      result = { status: 'unchanged', key, value: data1[key] };
    }
    return result;
  });
};

export default buildTree;
