const { ethers } = require("hardhat");

async function main() {
  const MyERC1155 = await ethers.getContractFactory("MyERC1155");
  const myERC1155 = await MyERC1155.deploy();

  await myERC1155.deployed();

  console.log("MyERC1155 deployed to:", myERC1155.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
