import web3 from './web3';
import contract from 'truffle-contract';
import FactoryContract from './build/contracts/CampaignFactory.json';

const factory = contract(FactoryContract);
factory.setProvider(web3.currentProvider);

const instance = factory.at('0xb7d61a153980fc2e682444640625dfa218f717d5');

export default instance;
