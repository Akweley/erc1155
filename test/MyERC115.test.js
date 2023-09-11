const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MyERC1155", function () {
  it("Should deploy and mint tokens", async function () {
    const [owner, alice] = await ethers.getSigners();

    const MyERC1155 = await ethers.getContractFactory("MyERC1155");
    const myERC1155 = await MyERC1155.deploy();
    await myERC1155.deployed();

    const tokenId = 1;
    const amount = 10;

    await myERC1155.connect(owner).mint(alice.address, tokenId, amount, "0x");

    const balance = await myERC1155.balanceOf(alice.address, tokenId);
    expect(balance).to.equal(amount);
  });
});
