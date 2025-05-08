import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

// Update with your Batch number
const BATCH_NUMBER = "16";

// The address of the BatchRegistry contract on Arbitrum
const ARBITRUM_BATCH_REGISTRY = "0xC23fB4a7EeA0EeE6Ff449a302eB9ac06828C8789";

/**
 * Deploys contracts based on the network
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;
  const isLocalNetwork = hre.network.name === "localhost" || hre.network.name === "hardhat";

  let batchRegistryAddress;

  if (isLocalNetwork) {
    // Deploy BatchRegistry only on local networks
    const batchRegistryDeployment = await deploy("BatchRegistry", {
      from: deployer,
      args: [deployer, BATCH_NUMBER],
      log: true,
      autoMine: true,
    });

    batchRegistryAddress = batchRegistryDeployment.address;

    const batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", deployer);
    console.log("\nBatchRegistry deployed to:", batchRegistryAddress);

    // The GraduationNFT contract is deployed on the BatchRegistry constructor.
    const batchGraduationNFTAddress = await batchRegistry.batchGraduationNFT();
    console.log("BatchGraduation NFT deployed to:", batchGraduationNFTAddress, "\n");
  } else {
    // On Arbitrum, use the existing BatchRegistry address
    batchRegistryAddress = ARBITRUM_BATCH_REGISTRY;
    console.log("\nUsing existing BatchRegistry at:", batchRegistryAddress);
  }

  // Deploy CheckIn contract
  const checkInDeployment = await deploy("CheckIn", {
    from: deployer,
    args: [batchRegistryAddress, deployer],
    log: true,
    autoMine: true,
  });

  console.log("CheckIn contract deployed to:", checkInDeployment.address, "\n");
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["BatchRegistry", "CheckIn"];
