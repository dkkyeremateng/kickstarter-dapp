const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic =
    'cost save fitness flee time used talent raccoon jazz must grid alcohol';

const provider = () => {
    return new HDWalletProvider(
        mnemonic,
        'https://rinkeby.infura.io/qquUKkMoGnrXflEuJnSF'
    );
};

module.exports = {
    networks: {
        ganache: {
            host: 'localhost',
            port: 7545,
            network_id: '*' // Match any network id
        },
        rinkeby: {
            provider: provider(),
            network_id: '3' // Match any network id
        }
    }
};
