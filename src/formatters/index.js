import stylish from './stylish.js';
import plain from './plain.js';

const format = (data, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    case 'json':
      return JSON.stringify(data, '', 2);
    default:
      throw new Error(`Unexpected format: ${formatName}`);
  }
};

export default format;
