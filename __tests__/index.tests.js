import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import { getDataToString } from '../src/formatters/plain.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8');

test('stringify in plain.js', () => {
  const obj = {
    new: true,
  };
  expect(getDataToString(5)).toBe('5');
  expect(getDataToString(null)).toBe('null');
  expect(getDataToString('hello')).toBe("'hello'");
  expect(getDataToString(obj)).toBe('[complex value]');
});

test('compare flat json files with default stylish format', () => {
  const filePath1 = getFixturePath('file3.json');
  const filePath2 = getFixturePath('file4.json');
  const result = readFile('result_stylish_flat.txt');
  expect(genDiff(filePath1, filePath2)).toEqual(result);
});

test('compare flat yml (yaml) files with default stylish format', () => {
  const filePath1 = getFixturePath('file3.yml');
  const filePath2 = getFixturePath('file4.yml');
  const result = readFile('result_stylish_flat.txt');
  expect(genDiff(filePath1, filePath2)).toEqual(result);
});

test('compare json & yaml files with default stylish format', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.yaml');
  const result = readFile('result_stylish.txt');
  expect(genDiff(filePath1, filePath2)).toEqual(result);
});

test('compare files with format plain', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.yaml');
  const result = readFile('result_plain.txt');
  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(result);
});

test('compare files with JSON format', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.yaml');
  const result = readFile('result_json.txt');
  expect(genDiff(filePath1, filePath2, 'json')).toEqual(result);
});

test('compare files with stylish format', () => {
  const filePath1 = getFixturePath('file1.json');
  const filePath2 = getFixturePath('file2.yaml');
  const result = readFile('result_stylish.txt');
  expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(result);
});
