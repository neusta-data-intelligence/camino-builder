import { BigNumber } from "ethers";
import {ethers} from "hardhat"

async function main() {
    // Creating an interactable contract variable.
    // "ContractName" is the Contract/Interface of the contract we want to call (We need to have either the full code or interface compiled)
    //  contractaddr - address of the contract to be called
    const kyc = await ethers.getContractAt("KYCTest", "0x70670D6606442e64CEAfC189A1F2D7487cBDFaAa")
    let entered = await kyc.hasEntered("0x534213807869ec2b00cc39ca1f019a20cc11fe33");

    console.log(entered);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });