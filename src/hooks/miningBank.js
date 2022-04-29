import { useWeb3React } from '@web3-react/core'
import { useCallback } from 'react'
import useWeb3 from './useWeb3'
import { MiningBankContract } from '../utils/contractHelpers.js'
import Environment from '../utils/Environment';

const realMiningBankAddress = Environment.miningBankAddress;

const Claiming = (tokenAddress) => {
  const { account } = useWeb3React();
  console.log("tokenAddress we have here is ",tokenAddress)
  const web3 = useWeb3();
  const contract = MiningBankContract(realMiningBankAddress, web3);
  const claim = useCallback(async () => {
    console.log('I am here tokenAddress', tokenAddress)
    try {
      const claims = await contract.methods
        .claim(tokenAddress, account)
        .send({ from: account })
        .on("transactionHash", (tx) => {
          return tx.transactionHash;
        })
        .on("error", () => {
          return false;
        });
        console.log("we get claim here is ", claims)
      return claims;
    } catch (error) {
      console.log("error:÷:::::", error);
      throw error;
    }
  }, [contract,account]);

  return { doClaim: claim };
};

const ClaimingAll = (tokenAddress) => {
  const { account } = useWeb3React();
  console.log("account we have here is ",account)
  const web3 = useWeb3();
  const contract = MiningBankContract(realMiningBankAddress, web3);
  const claimAll = useCallback(async () => {
    try {
      const claims = await contract.methods
        .claimAll(account)
        .send({ from: account })
        .on("transactionHash", (tx) => {
          return tx.transactionHash;
        })
        .on("error", () => {
          return false;
        });
        console.log("we get claimAll here is ", claims)
      return claims;
    } catch (error) {
      console.log("error:÷:::::", error);
      throw error;
    }
  }, [contract,account]);

  return { claimAll };
};
export default Claiming;

export { ClaimingAll, Claiming }