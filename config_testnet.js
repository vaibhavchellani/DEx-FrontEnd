/* eslint-env browser */

module.exports = {
  homeURL: 'http://localhost:3000',
  contractDEx: 'smart_contract/dEx.sol',
  contractToken: 'smart_contract/token.sol',
  contractReserveToken: 'smart_contract/reservetoken.sol',
  contractDExAddrs: [
    {
      addr: "0x71ac6b405b00eef22a88709ef11003e383d80a2a",
      info: "Deployed 07/31/2018"
    },
    {
      addr: "0x0def463933c4e286c79f517d7aa56c43bc25323b",
      info: "Deployed 07/24/2018"
    },
    {
      addr: "0x51ba4d11f6ed41748f8ebcb1890efb6d3e369f59",
      info: "Deployed 04/16/2018"
    }
  ],
  ethTestnet: 'ropsten',
  // ethProvider: 'https://ropsten.infura.io/TJSJL5u9maRXnaZrSvnv',
  ethProvider: 'https://testnet.matic.network',
  ethGasPrice: 20000000000,
  ethAddr: '0x0000000000000000000000000000000000000000',
  ethAddrPrivateKey: '',
  gasApprove: 250000,
  gasDeposit: 250000,
  gasWithdraw: 250000,
  gasTrade: 250000,
  gasOrder: 250000,
  ordersOnchain: true,
  apiServer: 'http://localhost:9000',
  userCookie: 'DEx',
  eventsCacheCookie: 'DEx_eventsCache',
  deadOrdersCacheCookie: 'DEx_deadOrdersCache',
  ordersCacheCookie: 'DEx_ordersCache',
  etherscanAPIKey: 'T1GSYD4D3NEAH44VQ34VHNDR9P316J9E7D',
  tokens: [
    {
      addr: "0x0000000000000000000000000000000000000000",
      name: "ETH",
      decimals: 18
    },
    {
      addr: "0x4a20f23b335127d7d5a06804f45d00180207771d",
      name: "REP",
      decimals: 18
    },
    {
      addr: "0xd52f642078fd05d22853c440026fdf8ab9e6e33e",
      name: "ZRX",
      decimals: 18
    },
    {
      addr: "0x046093929ebaa4887c795d065d53639a552f89c5",
      name: "OMG",
      decimals: 18
    },
    {
      addr: "0xec5589bb3bc66b492f41ee41f8516a152dc2855d",
      name: "BNB",
      decimals: 18
    },
    {
      addr: "0x654a4c978a3ca445fe9eea6cf5a50b31da492e93",
      name: "XLM",
      decimals: 18
    },
    {
      addr: "0x48b956f2a62471ffc25ed601f7fb94913fb0755b",
      name: "ZIL",
      decimals: 18
    }
  ],
  defaultPair: { token: 'XLM', base: 'ETH' },
  pairs: [
    { token: "VAIB", base: "ETH" },
    { token: "REP", base: "ETH" },
    { token: "ZRX", base: "ETH" },
    { token: "OMG", base: "ETH" },
    { token: "BNB", base: "ETH" },
    { token: "XLM", base: "ETH" },
    { token: "ZIL", base: "ETH" }
  ],
};
