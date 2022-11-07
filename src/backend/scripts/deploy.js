async function main() {

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // const teamWallet = "0xb132DBC8c868222Aa5aaE978288BE594cca94dD7" // mainnet
  const teamWallet = "0x31E9E4c0322f795236aE1Bf92bB67cC59C02dD72" // goerli eagle team
  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(teamWallet);

  console.log("NFT contract address", nft.address)
  
  saveFrontendFiles(nft, "NFT");
}

function saveFrontendFiles(contract, name) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../../frontend/contractsData";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${name}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + `/${name}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
