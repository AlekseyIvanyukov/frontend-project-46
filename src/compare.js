import _ from 'lodash';

const getResult = (sign, key, value) => `  ${sign} ${key}: ${value}`;

const getflatDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const objectsUnion = _.sortBy(_.union(keys1, keys2));

  const result = objectsUnion
    .reduce((acc, key) => {
      const hasOne = keys1.includes(key);
      const hasTwo = keys2.includes(key);

      if (hasOne && !hasTwo) {
        acc.push(getResult('-', key, data1[key]));
      } else if (!hasOne && hasTwo) {
        acc.push(getResult('+', key, data2[key]));
      } else if (hasOne && hasTwo && data1[key] !== data2[key]) {
        acc.push(getResult('-', key, data1[key]));
        acc.push(getResult('+', key, data2[key]));
      } else if (hasOne && hasTwo) {
        acc.push(getResult(' ', key, data1[key]));
      }
      return acc;
    }, []);

  return [
    '{',
    ...result,
    '}',
  ].join('\n');
};
export default getflatDiff;
