'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3Provider = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3Provider = web3.currentProvider;
    console.log('Web3 provider injected');
} else {
    web3Provider = new _web2.default.providers.HttpProvider('http://localhost:7545');
    console.log('Web3 provider injection not found, using local provider');
}

exports.default = new _web2.default(web3Provider);