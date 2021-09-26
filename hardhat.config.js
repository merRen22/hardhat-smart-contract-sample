require('dotenv').config();
require('@nomiclabs/hardhat-waffle');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: '0.8.4',
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      // ⚠ Error realted to metamask usage 👇 look it in readme. Only necessary when using localhost testnet
      //chainId: 1337,
    },
    // configuration for a test network
    ropsten: {
      url: process.env.INFURA_NET,
      accounts: [`0x${process.env.WALLET_PRIVATE}`],
    },
  },
};
