import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

import factory from '../ethereum/factory';
import Layouts from '../components/layouts';
import { Link } from '../routes';

export default class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.getDeployedCampaigns();
        return { campaigns };
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layouts>
                <div>
                    <h3>Open Campaign</h3>

                    <Link route="/campaigns/new">
                        <a>
                            <Button
                                floated="right"
                                content="Create Campaign"
                                icon="add circle"
                                primary
                            />
                        </a>
                    </Link>

                    {this.renderCampaigns()}
                </div>
            </Layouts>
        );
    }
}
