'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _truffleContract = require('truffle-contract');

var _truffleContract2 = _interopRequireDefault(_truffleContract);

var _Campaign = require('./build/contracts/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var campaign = (0, _truffleContract2.default)(_Campaign2.default);
campaign.setProvider(_web2.default.currentProvider);

exports.default = function (address) {
    return campaign.at(address);
};