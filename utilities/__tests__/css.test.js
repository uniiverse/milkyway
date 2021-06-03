import { classNames } from '../css';

describe('classNames', () => {
  test('When given two strings, return a concatenation of the two as a single string', () => {
    expect(classNames('foo', 'bar')).toEqual('foo bar');
  });

  test('When given two strings with a truthy boolean, return a concatenation of the two as a single string', () => {
    expect(classNames(true && 'foo', true && 'bar')).toEqual('foo bar');
  });

  test('When given one string and one falsy boolean, return a single string', () => {
    expect(classNames('foo', false && 'bar')).toEqual('foo');
  });

  test('When given String/Falsy/Boolean values, return a concatenation of strings as a single string', () => {
    expect(classNames(null, false, 'foo', undefined, 0, 1, true && 'bar', '')).toEqual('foo 1 bar');
  });

  test('When given invalid className strings, return a concatenation of strings as a single string', () => {
    expect(classNames('1foo', true && '__bar', 'status-3QyE_')).toEqual('1foo __bar status-3QyE_');
  });
});
