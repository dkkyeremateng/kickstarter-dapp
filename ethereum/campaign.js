import web3 from './web3';
import contract from 'truffle-contract';
import CampaignContract from './build/contracts/Campaign.json';

const campaign = contract(CampaignContract);
campaign.setProvider(web3.currentProvider);

export default address => {
    return campaign.at(address);
};
