'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _truffleContract = require('truffle-contract');

var _truffleContract2 = _interopRequireDefault(_truffleContract);

var _CampaignFactory = require('./build/contracts/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var factory = (0, _truffleContract2.default)(_CampaignFactory2.default);
factory.setProvider(_web2.default.currentProvider);

var instance = factory.at('0xb7d61a153980fc2e682444640625dfa218f717d5');

exports.default = instance;