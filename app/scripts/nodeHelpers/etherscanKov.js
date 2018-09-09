'use strict';
var _ethscan = require('./etherscan');
var kovan = {};
for (var attr in _ethscan) {
    kovan[attr] = _ethscan[attr];
}
kovan.SERVERURL = 'https://kovan.explorer.egem.io/api';
module.exports = kovan;
