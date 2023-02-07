// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0xf28362062c4591b2621c624fC59D9450E44Ef87e';    // This is the proxy address NOT the admin of the proxy.
   
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Preparing upgrade...");
    const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
    console.log("BoxV2 at:", boxV2Address);
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });