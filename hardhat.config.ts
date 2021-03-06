import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";
dotenv.config();
import { HardhatUserConfig, SolcUserConfig } from "hardhat/types";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-truffle5";

const compilerOverridePath = "test/Contracts/tarot-core/interfaces/";
const compilerOverrides: Record<string, SolcUserConfig> = {};

fs.readdirSync(path.join(__dirname, compilerOverridePath)).forEach((file) => {
  compilerOverrides[`${compilerOverridePath}${file}`] = {
    version: "0.5.16",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  };
});

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
    overrides: {
      ...compilerOverrides,
      "test/Contracts/spooky/MasterChef.sol": {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      "test/Contracts/spooky/UniswapV2Factory.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      "test/Contracts/spooky/UniswapV2Router02.sol": {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1,
      gasPrice: 2000,
    },
    cronos: {
      chainId: 25,
      url: 'https://evm.cronos.org',
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],      
    },
    localhost: {
      chainId: 1337,
      url: 'http://127.0.0.1:8546',
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    }
    // fantom: {
    //   chainId: 250,
    //   url: "https://rpcapi.fantom.network",
    //   accounts: {
    //     mnemonic: process.env.MNEMONIC,
    //   },
    // },
    // fantomtestnet: {
    //   chainId: 4002,
    //   url: "https://rpc.testnet.fantom.network",
    //   accounts: {
    //     mnemonic: process.env.MNEMONIC,
    //   },
    // },
  },
  etherscan: {
    apiKey: process.env.FTMSCAN_API_KEY,
  },
};

export default config;
