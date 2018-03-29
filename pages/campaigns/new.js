import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';

import Layouts from '../../components/layouts';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

export default class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        error: '',
        loading: false
    };

    onSubmit = async event => {
        event.preventDefault();

        this.setState({ loading: true, error: '' });

        try {
            const accounts = await web3.eth.accounts;

            await factory.createCampaign(this.state.minimumContribution, {
                from: accounts[0],
                gas: '1000000'
            });

            this.setState({ minimumContribution: '' });

            Router.pushRoute('/');
        } catch (error) {
            this.setState({ error: error.message });
        }

        this.setState({ loading: false });
    };

    render() {
        return (
            <Layouts>
                <h3>Create a Campaign</h3>

                <Form onSubmit={this.onSubmit} error={!!this.state.error}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event =>
                                this.setState({
                                    minimumContribution: event.target.value
                                })
                            }
                        />
                    </Form.Field>

                    <Message error header="Oops" content={this.state.error} />

                    <Button primary loading={this.state.loading}>
                        Create!
                    </Button>
                </Form>
            </Layouts>
        );
    }
}
