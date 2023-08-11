require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};






// /**
// * @type import('hardhat/config').HardhatUserConfig
// */

// require('dotenv').config();
// require("@nomiclabs/hardhat-ethers");

// const { API_URL, PRIVATE_KEY } = process.env;

// module.exports = {
//    solidity: "0.8.11",
//    defaultNetwork: "volta",
//    networks: {
//       hardhat: {},
//       volta: {
//          url: API_URL,
//          accounts: [`0x${PRIVATE_KEY}`],
//          gas: 210000000,
//          gasPrice: 800000000000,
//       }
//    },
// }