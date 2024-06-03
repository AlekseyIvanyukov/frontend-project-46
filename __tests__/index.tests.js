/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import getPlain, { getDataToString } from '../formatters/plain.js';
import format from '../formatters/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8');

test('stringify in plain.js', () => {
  const obj = {
    new: true,
  };
  expect(getDataToString(null)).toBe('null');
  expect(getDataToString(5)).toBe('5');
  expect(getDataToString('hello')).toBe('hello');
  expect(getDataToString(obj)).toBe('[complex value]');
});

test('stylish format', () => {
  expect(getPlain()).toEqual();
});
test('plain format', () => {
  expect(getPlain()).toEqual();
});
test('json format', () => {
  expect(getPlain()).toEqual();
});

test('compare json files', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.json');
  const result = readFile('resultDiff.txt');
  expect(genDiff(filePath1, filePath2)).toEqual(result);
});

test('compare yaml files', () => {
  const filePath1 = getFixturePath('file1.yaml');
  const filePath2 = getFixturePath('file2.yaml');
  const result = readFile('resultDiff.txt');
  expect(genDiff(filePath1, filePath2)).toEqual(result);
});
