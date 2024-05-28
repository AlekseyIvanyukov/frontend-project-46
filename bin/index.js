#!/usr/bin/env node

import genDiff from '../index.js';

genDiff('__fixtures__/file1.json', '__fixtures__/file2.json');

export default genDiff;
