# Token mint and string storage

This react app is meant to interact with 2 smart contracts. One for setting and reading string on a blockchain and other for creating a token. This code was develop using this awesome [tutorial](https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13)

## Contract compilation

To generate the ABI ( interface ) for your contracts you need to run this command 👇

`npx hardhat compile`

This will generate a json with the contract functions inside `./artifacts/contracts/...`. Now you can call your contract functions from your .js code.

## Deployment

This will run Hardhat Network 👇
`npx hardhat node`

This will deploy the compiled contract to the local network 👇
`node scripts/deploy.js --network localhost`
You can change localhost to nay network you are using with the infura configuration inside `hardhat.config.js`

## Configuration

hardhat.config.js -> The entirety of your Hardhat setup
scripts -> scripts for deploying contracts
test -> test for the contracts
contracts -> solidity code

## Warnings ⚠

- The setup exports the `chainId` 1337 because of [this](https://hardhat.org/metamask-issue.html)
