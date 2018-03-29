import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Table, Button } from 'semantic-ui-react';

import { Link, Router } from '../routes';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';

export default class RequestRow extends Component {
    onApprove = async () => {
        const campaign = await Campaign(this.props.address);
        const accounts = await web3.eth.accounts;

        await campaign.approveRequest(this.props.id, { from: accounts[0] });

        Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    };

    onFinalize = async () => {
        const campaign = await Campaign(this.props.address);
        const accounts = await web3.eth.accounts;

        await campaign.finalizedRequest(this.props.id, { from: accounts[0] });

        Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    };

    render() {
        const { Row, Cell } = Table;
        const {
            id,
            request,
            approversCount,
            complated,
            approvalsCount
        } = this.props;

        const readyToBeFinalize = approvalsCount > approversCount / 2;

        const renderRquest = request.map((req, index) => {
            return <Cell key={index}>{req}</Cell>;
        });

        return (
            <Row
                disabled={complated}
                positive={readyToBeFinalize && !complated}
            >
                <Cell>{id + 1}</Cell>
                {renderRquest}
                <Cell>
                    {complated ? null : (
                        <Button color="green" basic onClick={this.onApprove}>
                            Approve
                        </Button>
                    )}
                </Cell>
                <Cell>
                    {complated ? null : (
                        <Button color="teal" basic onClick={this.onFinalize}>
                            Finalize
                        </Button>
                    )}
                </Cell>
            </Row>
        );
    }
}
