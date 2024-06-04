#!/usr/bin/env node

// eslint-disable-next-line import/extensions
import genDiff from '../index.js';

genDiff(__fixtures__/file1.json, __fixtures__/file2.json);

export default genDiff;
