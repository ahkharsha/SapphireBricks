require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_EMC_RPC = "https://rpc1-testnet.emc.network";
const NEXT_PUBLIC_PRIVATE_KEY = "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    emc: {
      url: NEXT_PUBLIC_EMC_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
