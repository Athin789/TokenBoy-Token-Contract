const hre = require("hardhat");

async function main() {
 const TokenBoy = await hre.ethers.getContractFactory("TokenBoy");
 const tokenBoy = await TokenBoy.deploy(100000000, 50);

 await tokenBoy.deployed();

 console.log("TokenBoy Token deployed: ", tokenBoy.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
