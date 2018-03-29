import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';

import Layouts from '../../../components/layouts';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link } from '../../../routes';
import RequestRow from '../../../components/requestRow';

export default class RequestIndex extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;
        const campaign = Campaign(address);

        let requestsCount = await campaign.getRequestsCount();
        requestsCount = parseInt(requestsCount);

        let approversCount = await campaign.approversCount();
        approversCount = parseInt(approversCount);

        const requests = await Promise.all(
            Array(requestsCount)
                .fill()
                .map((element, index) => {
                    return campaign.requests(index);
                })
        );

        return { address, requests, requestsCount, approversCount };
    }

    renderRequestRows() {
        return this.props.requests.map((request, index) => {
            const complated = request[3];
            const approvalsCount = parseInt(request[4]);

            request[1] = parseFloat(web3.fromWei(request[1], 'ether'));
            request[4] = parseInt(request[4]) + '/' + this.props.approversCount;
            request.splice(-2, 1);

            return (
                <RequestRow
                    request={request}
                    id={index}
                    key={index}
                    approvalsCount={approvalsCount}
                    approversCount={this.props.approversCount}
                    complated={complated}
                    address={this.props.address}
                />
            );
        });
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;

        return (
            <Layouts>
                <h3>Request List</h3>

                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button
                            primary
                            floated="right"
                            style={{ marginBottom: 10 }}
                        >
                            Add Request
                        </Button>
                    </a>
                </Link>

                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount (wei)</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>

                    <Body>{this.renderRequestRows()}</Body>
                </Table>

                <div>Found {this.props.requestsCount} requests</div>
            </Layouts>
        );
    }
}
