const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Testing SprayContract on Kite AI Testnet");
  console.log("Sender:", deployer.address);

  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("Balance:", hre.ethers.formatEther(balance), "KITE\n");

  const contractAddress = "0x08fA5D1c16CD6E2a16FC0E4839f262429959E073";
  
  const SprayContract = await hre.ethers.getContractAt("SprayContract", contractAddress);

  // Send small amounts to 2 test addresses
  const recipients = [
    {
      recipient: "0x000000000000000000000000000000000000dEaD", // burn address
      amount: hre.ethers.parseEther("0.01"),
    },
    {
      recipient: "0x0000000000000000000000000000000000000001", // test address
      amount: hre.ethers.parseEther("0.02"),
    },
  ];

  const totalAmount = recipients.reduce((sum, r) => sum + r.amount, 0n);
  const fee = totalAmount * 30n / 10000n; // 0.3% fee
  const totalCost = totalAmount + fee;

  console.log("Spraying to 2 recipients:");
  console.log("  0x...dEaD: 0.01 KITE");
  console.log("  0x...0001: 0.02 KITE");
  console.log("  Total: 0.03 KITE + fee:", hre.ethers.formatEther(fee), "KITE");
  console.log("  Total cost:", hre.ethers.formatEther(totalCost), "KITE\n");

  const tx = await SprayContract.sprayETH(recipients, { value: totalCost });
  console.log("Transaction sent:", tx.hash);
  
  const receipt = await tx.wait();
  console.log("Confirmed in block:", receipt.blockNumber);
  console.log("\nView tx: https://testnet.kitescan.ai/tx/" + tx.hash);
  console.log("\nTest PASSED! SprayContract works on Kite AI Testnet.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
