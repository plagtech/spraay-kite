const hre = require("hardhat");

async function main() {
  const signers = await hre.ethers.getSigners();
  
  if (signers.length === 0) {
    console.log("ERROR: No signers found. Check your PRIVATE_KEY.");
    console.log("Try running with:");
    console.log('  $env:PRIVATE_KEY="your_key_here"');
    console.log("  npx hardhat run scripts/deploy.js --network kiteTestnet");
    process.exit(1);
  }

  const deployer = signers[0];
  console.log("Deploying SprayContract on Kite AI Testnet");
  console.log("Deployer:", deployer.address);
  
  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("Balance:", hre.ethers.formatEther(balance), "KITE");

  const feeRecipient = deployer.address;
  const feeBps = 30; // 0.3%

  const SprayContract = await hre.ethers.getContractFactory("SprayContract");
  const spray = await SprayContract.deploy(feeRecipient, feeBps);
  await spray.waitForDeployment();

  const address = await spray.getAddress();
  console.log("\nSprayContract deployed to:", address);
  console.log("Fee recipient:", feeRecipient);
  console.log("Fee: 30 bps (0.3%)");
  console.log("\nView on KiteScan: https://testnet.kitescan.ai/address/" + address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
