const Campaign = artifacts.require('./Campaign.sol');
const CampaignFactory = artifacts.require('./CampaignFactory.sol');

contract('Campaign', accounts => {
    let factory;
    let campaignAddresses;
    let campaign;

    beforeEach(async () => {
        factory = await CampaignFactory.deployed();

        await factory.createCampaign('100', { from: accounts[0] });

        campaignAddresses = await factory.getDeployedCampaigns();
        campaign = await Campaign.at(campaignAddresses[0]);
    });

    it('should deploy contracts', async () => {
        assert.ok(factory.address);
        assert.ok(campaign.address);
    });

    it('should mark caller as campaign manager', async () => {
        const manager = await campaign.manager();
        assert.equal(accounts[0], manager);
    });

    it('should allow people to donate money', async () => {
        await campaign.contribute({
            from: accounts[1],
            value: web3.toWei('5', 'ether')
        });
        const isContributor = await campaign.approvers(accounts[1]);
        assert(isContributor);
    });

    it('should require a minimum contribution', async () => {
        try {
            await campaign.contribute({
                from: accounts[1],
                value: web3.toWei('5', 'ether')
            });
            assert(false);
        } catch (error) {
            assert(error);
        }
    });

    it('should allow a manager to make a payment request', async () => {
        await campaign.createRequest(
            'Buy batteries',
            web3.toWei('5', 'ether'),
            accounts[2],
            {
                from: accounts[0]
            }
        );
        const requests = await campaign.requests(0);
        assert.equal('Buy batteries', requests[0]);
    });

    it('should processes requests', async () => {
        await campaign.contribute({
            from: accounts[1],
            value: web3.toWei('5', 'ether')
        });

        await campaign.createRequest(
            'Buy batteries',
            web3.toWei('5', 'ether'),
            accounts[2],
            {
                from: accounts[0]
            }
        );

        await campaign.approveRequest(0, { from: accounts[1] });
        await campaign.finalizedRequest(0, { from: accounts[0] });

        let balance = await web3.eth.getBalance(accounts[2]);
        balance = web3.fromWei(balance, 'ether');
        balance = parseFloat(balance);

        assert(balance > 100);
    });
});
