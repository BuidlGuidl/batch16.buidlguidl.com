#!/usr/bin/env node

/**
 * This script scans the builders directory for profile pages
 * and updates the API route with the list of found profiles.
 * 
 * It should be run during the build process.
 */

const fs = require('fs');
const path = require('path');

// Define paths
const buildersDir = path.join(__dirname, '..', 'app', 'builders');
const apiRoutePath = path.join(__dirname, '..', 'app', 'api', 'builders', 'profiles', 'route.ts');

// Regular expression for Ethereum addresses
const ETH_ADDRESS_REGEX = /^0x[a-fA-F0-9]{40}$/;

console.log('Scanning builder profiles...');

// Check if builders directory exists
if (!fs.existsSync(buildersDir)) {
    console.log('Builders directory not found.');
    process.exit(0);
}

// Check if a directory is a valid builder profile
// 1. Must have a name that looks like an Ethereum address
// 2. Must contain a page.tsx or page.js file
function isValidBuilderProfile(dirName) {
    // Skip non-address-looking directories
    if (!ETH_ADDRESS_REGEX.test(dirName)) {
        return false;
    }

    // Check if directory contains a page component
    const dirPath = path.join(buildersDir, dirName);
    const isDir = fs.statSync(dirPath).isDirectory();

    if (!isDir) {
        return false;
    }

    return (
        fs.existsSync(path.join(dirPath, 'page.tsx')) ||
        fs.existsSync(path.join(dirPath, 'page.js'))
    );
}

// Scan for builder profiles (directories in the builders folder that contain pages)
const builderProfiles = fs.readdirSync(buildersDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== 'components')
    .map(dirent => dirent.name)
    .filter(isValidBuilderProfile);

console.log(`Found ${builderProfiles.length} builder profiles.`);

// Check if API route file exists
if (!fs.existsSync(apiRoutePath)) {
    console.error('API route file not found.');
    process.exit(1);
}

// Read the API route file
let routeContent = fs.readFileSync(apiRoutePath, 'utf8');

// Replace the BUILDER_PROFILES array content
const newArray = JSON.stringify(builderProfiles, null, 2);
routeContent = routeContent.replace(
    /const BUILDER_PROFILES = \[([\s\S]*?)\];/,
    `const BUILDER_PROFILES = ${newArray};`
);

// Write the updated content back to the file
fs.writeFileSync(apiRoutePath, routeContent);

console.log('Builder profiles API route updated successfully.'); 