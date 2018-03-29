import Web3 from 'web3';

let web3Provider;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3Provider = web3.currentProvider;
    console.log('Web3 provider injected');
} else {
    web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    console.log('Web3 provider injection not found, using local provider');
}

export default new Web3(web3Provider);
