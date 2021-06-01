# Utilities

This README.md is dedicated to documentation of utility functions included in this file's directory.

## classNames()

classNames is a simple javascript utility for conditionally joining classNames together. It also filters out invalid classNames that do not match below regex.

```js
/^[a-zA-Z][a-zA-Z0-9-]+$/;
```

### Examples

```js
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', true && 'bar'); // => 'foo bar'
classNames(false && 'foo', true && 'bar'); // => 'bar'
classNames('foo', false && 'bar'); // => 'foo'

// other falsy/boolean values are ignored
classNames(null, false, 'foo', undefined, 0, 1, true && 'bar', ''); // => 'foo bar'
// invalid class names are ignored
classNames('1foo', true && '__bar'); // => ''
```
