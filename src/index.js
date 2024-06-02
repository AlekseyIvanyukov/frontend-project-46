/* eslint-disable import/extensions */
import path from 'path';
import fs from 'node:fs';
import parse from './parser.js';
import getFlatDiff from './compare.js';
import buildTree from './treebuilder.js';
import format from '../formatters/index.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), '__fixtures__', filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parse(fs.readFileSync(filepath, ('utf-8')), extractFormat(filepath));

const genDiff = (filepath1, filepath2) => {
  const fullPath1 = getFullPath(filepath1);
  const fullPath2 = getFullPath(filepath2);
  // console.log(`fullpath1 ==> ${fullPath1}`);
  // console.log(`fullpath2 ==> ${fullPath2}`);

  const data1 = getData(fullPath1);
  const data2 = getData(fullPath2);
  // console.log(data1);
  // console.log(data2);

  // const resultDiff = getDiff(data1, data2);
  const resultDiff = buildTree(data1, data2);

  return resultDiff;
};

export default genDiff;
