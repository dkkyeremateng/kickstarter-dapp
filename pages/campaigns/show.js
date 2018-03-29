import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';

import Layout from '../../components/layouts';
import ContributeForm from '../../components/contributeForm';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import { Link } from '../../routes';

export default class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);

        const summary = await campaign.getSummary();

        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCard() {
        const {
            minimumContribution,
            balance,
            requestCount,
            approversCount,
            manager
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of manager',
                description:
                    'The manager created this campaign and can create request to withdraw money',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: parseInt(minimumContribution),
                meta: 'Minimum Contribution (wei)',
                description:
                    'You must contribute at least this much wei to become an approver'
            },
            {
                header: parseInt(requestCount),
                meta: 'Number of Requests',
                description:
                    'A request tries to withdraw money from the contract. Request must be approved by approvers'
            },
            {
                header: parseInt(approversCount),
                meta: 'Number of Approvers',
                description:
                    'Number of people who have already donated to this campaign'
            },
            {
                header: parseFloat(web3.fromWei(balance, 'ether')),
                meta: 'Campaign Balance (ether)',
                description:
                    'The balance is how much money this campaign has spend'
            }
        ];
        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <h3>Campaign Detail</h3>

                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCard()}
                        </Grid.Column>

                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Link
                                route={`/campaigns/${
                                    this.props.address
                                }/requests`}
                            >
                                <a>
                                    <Button primary>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}
