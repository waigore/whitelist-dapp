require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://prettiest-cosmological-diagram.ethereum-sepolia.discover.quiknode.pro/47464ef46f212f69a5a596be135274221f82b236/",
      accounts: ["83715394f8d61e74bcbfc4f0ce6a85d263e0de10655215afcdf9922472c7cfa3"]
    }
  }
};

//contract address: 0x4f3E516f3EF815c369Fe8189846ac9037A20a298