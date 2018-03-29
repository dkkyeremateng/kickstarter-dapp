const Campaign = artifacts.require('./Campaign.sol');
const CampaignFactory = artifacts.require('./CampaignFactory.sol');

module.exports = function(deployer) {
    deployer.deploy(CampaignFactory);
    // deployer.deploy(Campaign);
};
