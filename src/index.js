import path from 'path';
import fs from 'node:fs';
import parse from './parser.js';
import buildTree from './treebuilder.js';
import format from '../formatters/index.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), '__fixtures__', filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, ('utf-8')), extractFormat(filepath));

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const fullPath1 = getFullPath(filepath1);
  const fullPath2 = getFullPath(filepath2);

  const data1 = getData(fullPath1);
  const data2 = getData(fullPath2);

  console.log(buildTree(data1, data2));
  return format(buildTree(data1, data2), formatName);
};

export default genDiff;
