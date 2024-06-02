/* eslint-disable import/extensions */
import stylish from './stylish.js';
import plain from './plain.js';

const format = (data, formatName) => {
  if (formatName === 'stylish') {
    return stylish(data);
  } if (formatName === 'plain') {
    return plain(data);
  }
  return new Error(`Unexpected format: ${formatName}`);
};

export default format;
