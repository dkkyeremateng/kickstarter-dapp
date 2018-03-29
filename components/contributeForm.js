import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';

import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

export default class ContributeForm extends Component {
    state = {
        amount: '',
        loading: false,
        error: ''
    };

    onSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true, error: '' });

        try {
            const campaign = Campaign(this.props.address);
            const accounts = await web3.eth.accounts;

            await campaign.contribute({
                from: accounts[0],
                value: web3.toWei(this.state.amount, 'ether'),
                gas: '1000000'
            });

            this.setState({ amount: '' });

            Router.replaceRoute(`/campaigns/${this.props.address}`);
        } catch (error) {
            this.setState({ error: error.message });
        }

        this.setState({ loading: false });
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.error}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input
                        label="ether"
                        labelPosition="right"
                        value={this.state.amount}
                        onChange={event =>
                            this.setState({
                                amount: event.target.value
                            })
                        }
                    />
                </Form.Field>

                <Message error header="Oops" content={this.state.error} />

                <Button primary loading={this.state.loading}>
                    Contribute!
                </Button>
            </Form>
        );
    }
}
