# ssncjs

<div align="center">

  <p>
    <a href="https://www.npmjs.com/package/ssncjs"><img src="https://img.shields.io/npm/v/ssncjs.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/ssncjs"><img src="https://img.shields.io/npm/dt/ssncjs.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/ssncjs/"><img src="https://nodei.co/npm/ssncjs.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

Module permettant de vérifier si sa Nintendo Switch est hackable grâce à son numéro de série.
Original in Python : https://github.com/AkdM/ssncpy

## Installation
```
npm i ssncjs
```

## Utilisation
```js
const ssnc = require('ssncjs')

console.log(ssnc.check('serials', 'XAJ10011683536 ou XAJ1 0011683536'))
```

Réponse :
```
{
    serial: ['XAJ10011683536'],
    prefix: 'XAJ1',
    serial_digits: '1001168',
    status: 'safe'
}
```

Exemple : https://github.com/MeatReed/ssncjs/tree/master/examples