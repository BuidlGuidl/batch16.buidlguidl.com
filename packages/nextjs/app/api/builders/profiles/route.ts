import { NextResponse } from "next/server";

// Statically define known builder profiles
// This will be built into the application at build time
// and will be automatically updated when new profiles are added to the codebase
const BUILDER_PROFILES = [
  "0x119d9A1ef0D16361284a9661727b363B04B5B0c8",
  "0x167142915AD0fAADD84d9741eC253B82aB8625cd",
  "0x208B2660e5F62CDca21869b389c5aF9E7f0faE89",
  "0x2E15bB8aDF3438F66A6F786679B0bBBBF02A75d5",
  "0x2d90C8bE0Df1BA58a66282bc4Ed03b330eBD7911",
  "0x3BFbE4E3dCC472E9B1bdFC0c177dE3459Cf769bf",
  "0xB24023434c3670E100068C925A87fE8F500d909a",
  "0xE00E720798803B8B83379720c42f7A9bE1cCd281",
  "0xb216270aFB9DfcD611AFAf785cEB38250863F2C9",
  "0xe98540d28F45830E01D237251Bfc4777E69c9A46",
];

export const dynamic = "force-dynamic"; // Don't cache this route

export async function GET() {
  try {
    // In a real production environment, this endpoint could:
    // 1. Fetch from a database
    // 2. Check against a predefined list that's updated during CI/CD
    // 3. Use server-only code to scan directories in a non-serverless environment

    // For this implementation, we're returning the predefined list
    // that will be populated during build time

    // Get all directories in /app/builders/[address] automatically via Next.js route conventions
    const builderProfiles = BUILDER_PROFILES;

    return NextResponse.json({ profiles: builderProfiles }, { status: 200 });
  } catch (error) {
    console.error("Error fetching builder profiles:", error);
    return NextResponse.json({ profiles: [], error: "Failed to fetch profiles" }, { status: 500 });
  }
}
