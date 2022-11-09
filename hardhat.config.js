require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
     hardhat: {},
     goerli: {
       url: process.env.REACT_APP_API_URL_GOERLI_INFURA,
       accounts: ['0x' + process.env.REACT_APP_PRIVATE_KEY_GOERLI],
       allowUnlimitedContractSize: true,
       gas: 2100000,
       gasPrice: 8000000000,
     },
     mainnet: {
       url: process.env.REACT_APP_API_URL_MAINNET_INFURA,
       accounts: [process.env.REACT_APP_PRIVATE_KEY_MAINNET],
       gas: 2100000,
       gasPrice: 12000000000
     }
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_API_KEY
  }
};
