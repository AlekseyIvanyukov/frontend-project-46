/* eslint-disable import/extensions */
import stylish from './stylish.js';
import plain from './plain.js';

const format = (data, fileFormat = 'stylish') => {
  if (fileFormat === 'stylish') {
    return stylish(data);
  } if (format === 'plain') {
    return plain(data);
  }
  return new Error(`Unexpected format: ${format}`);
};

export default format;
