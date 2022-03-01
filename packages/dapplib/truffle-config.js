require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture street cruise script coil inside light army general'; 
let testAccounts = [
"0xe4a8cf664b5a6d1b3b53e33f04bfeda414aff68897b1d1ee39802bbbb6896e4a",
"0xe0887c071c1be9bf61d5fd8c96d8031395f6cc4ab09a9ac9ff29c48542625553",
"0x7f729800599ffbcd033b7ccb5ffcf6eef46332e272f7e39e14a2ebb2363db506",
"0x23e9a71e974c4e9d185aa3ecfa2bf52fa0963834a8e3790276612f7d9121f7c8",
"0x792661b13054eba1b23171eed1c4eaf99a16dd4587ae25bfc9f675c0e52801d7",
"0xd2de08a4f0d5233f0c89fdcef64a6c8ed30d031fd8f66a6af59ec09796115a17",
"0xa1061e8a9cde90f03f592ec75441f77370164fb9eea48925d8e69e31349f2311",
"0xc35b44793494a771ce83e1dc84429e1e4e51f049bf4ec5bdbf258fd8a724fa99",
"0x697bcb7b0503366f951ccf13d9eb3bc03ddd26b2ff52938dbb895d9b4a61ed68",
"0x399a747b992039fcba34a3f0f01843fbf13fc36cf2a46772fcb011c5dabd5dff"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

