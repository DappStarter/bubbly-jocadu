require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name release rural history good praise army gift'; 
let testAccounts = [
"0x414876daf2942dc117dc0b3ab148290cee8bb715444e52ffcb083f2bb58a7380",
"0xe685cfc5effeed38eebf4d4335155ea61cad3af6b895e5fe49745b5a48e8491d",
"0x8c8ba65cc60de2f36bee8f7423cdff9a3f3f7a678fa056dcf83170ff26a0775d",
"0x959d86f34a5c11f82e7f5275d376af67d1afc6dabd09b90f3232f6e32aa27beb",
"0x7737b10a736dbba12b1cbd383e471d4a69b106e30f5d1dbedb471890430ca06a",
"0x93472b96c93babc59fb034233eb59793f0280e178c1651c9ece636bde3c4dc6e",
"0x986084a75eee59db4c0ab280cf2515bb21ef6eebda2dea9d3ccbdf598502c5e1",
"0xf7872e6b1fffc9d3627f76ca3fdb443e3448c5e2c343b4d48ecc1dcd84bb6b0b",
"0xc4c5e58d9db610a72f63a9ec4d7a981ce49a138264fe8bac7b134c1ccc2fdd1b",
"0xc7ed5f5c400373c7783a2525bb7582c87cad04bbf81fa9123ba350423501e56b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
