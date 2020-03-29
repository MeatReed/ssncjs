# ssncjs

Module permettant de vérifier si sa Nintendo Switch est hackable grâce à son numéro de série.
Original in Python : https://github.com/AkdM/ssncpy

## Installation
```
npm i ssncjs
```

## Utilisation
```js
const ssnc = require('ssnc')

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