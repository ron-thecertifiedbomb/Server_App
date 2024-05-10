import { expect, test } from '@jest/globals';
import { describe } from 'node:test';

function sum(n1: number, n2: number) {
  return n1 + n2;
}

describe('Sample Test', () => {
  test('adds 2 number', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
