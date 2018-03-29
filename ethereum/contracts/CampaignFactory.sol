pragma solidity ^0.4.18;

import "./Campaign.sol";

contract CampaignFactory {
	address[] public deployedCampaign;

	function createCampaign(uint minimum) public {
        require(minimum > 99);
		
		address newCampaign = new Campaign(minimum, msg.sender);

		deployedCampaign.push(newCampaign);
	}

	function getDeployedCampaigns() public view returns (address[]) {
		return deployedCampaign;
	}
}