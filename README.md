# is-generator

Tests whether a function is an generator.


## Install

```sh
npm i @urban/is-generator
```


## Usage

```js
import isGenerator from '@urban/is-generator'

function * gen () {}
function noop () {}

isGenerator(gen) // => true
isGenerator(noop) // => false
```


## License

[The MIT License (MIT)](LICENSE). Copyright (c) [Urban Faubion](http://urbanfaubion.com).
