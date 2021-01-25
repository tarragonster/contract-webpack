import './style.scss'
import 'bootstrap'
import Web3 from "web3";

const App = {
    loading: false,
    contracts: {},

    load: async () => {
        await App.loadWeb3()
    },

    loadWeb3: async () => {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            try {
                // Request account access if needed
                await window.ethereum.enable();
                // Accounts now exposed
                return  web3
            } catch (error) {
                console.log(error)
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            const web3 = window.web3;
            // Acccounts always exposed
            console.log('Injected web3 detected.');
            return web3;
        }
        // Non-dapp browsers...
        else {
            alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
    }
}

window.addEventListener('load', async () => {
    await App.load()
})
