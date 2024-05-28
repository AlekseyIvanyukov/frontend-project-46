import { types } from 'js-yaml';
import _ from 'lodash';

const getFlatDiff = (data1, data2) => {
  const entries1 = Object.entries(data1);
  const entries2 = Object.entries(data2);
  const objectsUnion = _.sortBy(_.union(entries1, entries2));
  console.log(objectsUnion);

  const result = {};
  objectsUnion.map(([key, value]) => {
    if (!Object.hasOwn(data1, key)) {
      result[`+ ${key}`] = value;
    } else if (!Object.hasOwn(data2, key)) {
      result[`- ${key}`] = value;
    } else if (data1[key] === data2[key]) {
      result[`  ${key}`] = value;
    }
  });
  return result;
};

export default getFlatDiff;
