import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useCallback } from 'react'
import useWeb3 from './useWeb3'
import { RouletteContract } from '../utils/contractHelpers.js'
import Environment from '../utils/Environment';

const rouletteContractAddress = Environment.rouletteAddress;

const Spinner = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const contract = RouletteContract(rouletteContractAddress, web3);
    const spinroulet = useCallback(async () => {
      try {
        const spinss = await contract.methods
          .spin()
          .send({ from: account })
          .on("transactionHash", (tx) => {
            return tx.transactionHash;
          })
          .on("error", () => {
            return false;
          });
        return spinss;
      } catch (error) {
        console.log("error:÷:::::", error);
        throw error;
      }
    }, [contract,account]);
  
    return { Spinnerinner: spinroulet };
};

const UserInfo = () => {
  const [balance, setBalance] = useState(0);
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const contract = RouletteContract(rouletteContractAddress, web3);
  useEffect(() => {
    // if (!account) {
    //   setBalance(0);
    //   return;
    // }
    const fetchBalance = async () => {
      try {
        let balance = await contract.methods.getUserInfo(account).call();        
        await setBalance(balance);
      } catch (error) {
        setBalance(0);
      }
    };
    // if (account) {
    fetchBalance();
    // }
  }, [account]);
  return balance;
};

const Claim = () => { 
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const contract = RouletteContract(rouletteContractAddress, web3);
  const claiming = useCallback(async () => {
    try {
      const claims = await contract.methods
        .claim()
        .send({ from: account })
        .on("transactionHash", (tx) => {
          return tx.transactionHash;
        })
        .on("error", () => {
          return false;
        });

      return claims;
    } catch (error) {
      console.log("error:÷:::::", error);
      throw error;
    }
  }, [contract,account]);

  return { handleClaim: claiming };
};

const AddNewRound = () => { 
  const { account } = useWeb3React();
  const web3 = useWeb3();
  const contract = RouletteContract(rouletteContractAddress, web3);
  const addingNewRound = useCallback(async (amount) => {  
    try {
      const addRound = await contract.methods
        .addRound(account, amount)
        .send({ from: account })
        .on("transactionHash", (tx) => {
          return tx.transactionHash;
        })
        .on("error", () => { 
          return false;
        });
      return addRound;
    } catch (error) {
      console.log("error:÷:::::", error);
      throw error;
    }
  }, [contract, account]);

  return { handleAddingNewRound: addingNewRound };
};

export default Spinner;

export { Spinner, UserInfo, Claim, AddNewRound }