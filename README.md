# pthash

A small library providing a way to hash things to plain text strings secure password storage.

## Installation

You can install pthash with:
`npm install pthash --save`
Or
`yarn add pthash`

## Usage

```js
const pthash = require('pthash');

const hash = pthash("password");

console.log(hash)
```

If you don't like the suppa duppa kewl fn that this module provides, you cann pass your own algorithm function:

```js
const pthash = require('pthash');

const hash = pthash("password", algorithmFn);

console.log(hash)
```


## Tests

Just run `npm test`

## Info

Please do not use this in production, or at your own risk
