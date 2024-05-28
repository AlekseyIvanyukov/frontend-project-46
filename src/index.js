import path from 'path';
import fs from 'node:fs';
import parse from './parse.js';
import buildTree from './treebuilder.js';
import getFlatDiff from './compare.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, ('utf-8')), extractFormat(filepath));

const genDiff = (filepath1, filepath2) => {
  const fullPath1 = getFullPath(filepath1);
  console.log(`fullpath1 ==> ${fullPath1}`);
  const fullPath2 = getFullPath(filepath2);
  console.log(`fullpath2 ==> ${fullPath2}`);

  const data1 = getData(fullPath1);
  console.log(data1);
  const data2 = getData(fullPath2);
  console.log(data2);

  const flatDiff = getFlatDiff(data1, data2);

  const tree = buildTree(data1, data2);
  console.log(`tree ===> ${tree}`);

  // format(tree, formatName);
  return flatDiff;
};

export default genDiff;
