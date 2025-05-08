import { expect } from "chai";
import { ethers } from "hardhat";
import { BatchRegistry, CheckIn } from "../typechain-types";

describe("CheckIn", function () {
  let batchRegistry: BatchRegistry;
  let checkIn: CheckIn;
  let owner: any;
  let otherAccount: any;

  before(async () => {
    [owner, otherAccount] = await ethers.getSigners();

    // Deploy BatchRegistry first
    const batchRegistryFactory = await ethers.getContractFactory("BatchRegistry");
    batchRegistry = (await batchRegistryFactory.deploy(owner.address, 16)) as BatchRegistry;
    await batchRegistry.waitForDeployment();

    // Deploy CheckIn contract
    const checkInFactory = await ethers.getContractFactory("CheckIn");
    checkIn = (await checkInFactory.deploy(await batchRegistry.getAddress(), owner.address)) as CheckIn;
    await checkIn.waitForDeployment();

    // Add owner to allowList
    await batchRegistry.updateAllowList([owner.address], [true]);
  });

  describe("Deployment", function () {
    it("Should set the right BatchRegistry address", async function () {
      expect(await checkIn.batchRegistry()).to.equal(await batchRegistry.getAddress());
    });

    it("Should set the right owner", async function () {
      expect(await checkIn.owner()).to.equal(owner.address);
    });
  });

  describe("CheckIn", function () {
    it("Should allow owner to check in through the contract", async function () {
      await checkIn.checkMeIn();
      expect(await batchRegistry.yourContractAddress(owner.address)).to.equal(await checkIn.getAddress());
    });

    it("Should not allow non-owner to check in", async function () {
      await expect(checkIn.connect(otherAccount).checkMeIn())
        .to.be.revertedWithCustomError(checkIn, "OwnableUnauthorizedAccount")
        .withArgs(otherAccount.address);
    });
  });
});
