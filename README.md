[![Build Status](https://travis-ci.org/Moosecoop/d.jsError.svg?branch=master)](https://travis-ci.org/Moosecoop/d.jsError) [![Coverage Status](https://coveralls.io/repos/github/Moosecoop/d.jsError/badge.svg)](https://coveralls.io/github/Moosecoop/d.jsError)
# SimpleErr
SimpleErr

SimpleErr is a module for showing users your errors more easily!

## Usage
```javascript
const sErr = require('d.jserror');

var err = sErr(`user does not have permission MANAGE_MESSAGES`, 2, 'Moosecoop#3054');
```

## Stuff
simple-err was originaly called d.jserror, and was meant for use with Discord.js only, but now works with anything, being it returns a string. It is still d.jserror on NPM, GitHub, etc, but should be referred to as simple-err.

## Legal
