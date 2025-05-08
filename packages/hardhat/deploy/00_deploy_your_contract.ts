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
  const network = hre.network.name;

  let batchRegistryAddress: string;

  // Only deploy BatchRegistry locally
  if (network === "localhost" || network === "hardhat") {
    const batchRegistryDeployment = await deploy("BatchRegistry", {
      from: deployer,
      args: [deployer, BATCH_NUMBER],
      log: true,
      autoMine: true,
    });

    batchRegistryAddress = batchRegistryDeployment.address;
    console.log("\nBatchRegistry deployed to:", batchRegistryAddress);

    // Get the deployed contract
    const batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", deployer);

    // The GraduationNFT contract is deployed on the BatchRegistry constructor
    const batchGraduationNFTAddress = await batchRegistry.batchGraduationNFT();
    console.log("BatchGraduation NFT deployed to:", batchGraduationNFTAddress, "\n");
  } else if (network === "arbitrum") {
    batchRegistryAddress = ARBITRUM_BATCH_REGISTRY;
    console.log("\nUsing BatchRegistry at:", batchRegistryAddress);
  }

  // Deploy CheckIn contract on both networks
  const checkInDeployment = await deploy("CheckIn", {
    from: deployer,
    args: [batchRegistryAddress, deployer],
    log: true,
    autoMine: true,
  });

  console.log("CheckIn contract deployed to:", checkInDeployment.address);
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
deployYourContract.tags = ["BatchRegistry", "CheckIn"];
