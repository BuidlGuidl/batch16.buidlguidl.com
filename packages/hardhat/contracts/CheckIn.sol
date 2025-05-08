// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IBatchRegistry {
    function checkIn() external;
}

contract CheckIn is Ownable {
    IBatchRegistry public batchRegistry;

    constructor(address _batchRegistryAddress, address initialOwner) Ownable(initialOwner) {
        batchRegistry = IBatchRegistry(_batchRegistryAddress);
    }

    function checkMeIn() external onlyOwner {
        batchRegistry.checkIn();
    }
}
