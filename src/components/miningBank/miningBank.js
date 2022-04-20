import React, { useState } from 'react'
import './miningBank.scss';
import tokens from './tokens.json';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';
import Web3 from 'web3';

function MiningBank() {
    let decimal = 1e18
    let web3 = new Web3(window.ethereum);
    const { account } = useWeb3React();
    const [sendAmount, setSendAmount] = useState(0)
    const handleAmountChange = (e) => {
        setSendAmount(e.target.value)
        validateAmount(e.target.value)
    }

    // save transaction to our firebase DB
    const saveTransaction = (tokenInfo, amount) => {      
       
       
         
    }

    // validate token amount
    const validateAmount = (amount) => {
        if (amount <= 0) {
            toast.error('Please input correct amount', {
                position: "top-right",
                autoClose: 5000,
            });

            return false;
        } else {
            return true;
        }
    }

    // send token to admin wallet address
    const sendToken = async (item) => {

        validateAmount(sendAmount)     
        
        try {
            let tokenContract = null;
            let your_balance = 0
            // const adminWallet = "0x67438c11308dd04d0E5Fed6D755a1c9b9C1C9F6e"
            const adminWallet = "0x87F641dE51F0Eb62FB08E18cc1CaA65e133129aA"

            tokenContract = await new web3.eth.Contract(item.abi, item.tokenTestAddress);
            
            // token.methods.balanceOf(adminWallet).call().then(res => {
            //     your_balance = (res / 1e18).toFixed(0);
            //     console.log('---------------------result', your_balance)
            // })

            if (tokenContract) {
                await tokenContract.methods
                    .transfer(adminWallet, web3.utils.toWei(sendAmount, 'ether') )
                    .send({ from: account})
                    .then(res => {
                        your_balance = (res / decimal).toFixed(0);
                        item.tokenBalance = your_balance

                        if (res) {
                            // add transaction into our fireabse DB
                            saveTransaction(item, sendAmount)

                            toast.success('Successfully Sent', {
                                position: "top-right",
                                autoClose: 5000,
                            });
                        } else {
                            toast.error('Error Occured', {
                                position: "top-right",
                                autoClose: 5000,
                            });
                        }
                    })
            }
        } catch (err) {
            console.log("err22", err);
        }        
    }


const claimAll = () => {
    console.log('cliam all tokens')
}

// getTokenBalance()

const getTokenItemHtml = (item, number) => {
    return (
        <div className="col-12" key={number}>
            <div className="row align-items-center justify-content-center">
                <div className="col-6">
                    <input type="text" class="address-input" onChange={handleAmountChange} />
                </div>
                <div className="col-2">
                  100  { item.tokenName }
                </div>
                <div className="col-2">
                    <button type='button' onClick={()=>sendToken(item)} className='btn-common'>
                        Claim
                    </button>                    
                </div>                
            </div>            
        </div>
    )
}

return (
    <>
        {/* <Navbar /> */}
        <div className="converter-main">
            <div className="container text-center">
                <div className="row pt-2">
                    {
                        tokens.map((item, key) => {
                            return getTokenItemHtml(item, key)
                        })
                    }
                </div>
                <div class="col-12 text-center">
                    <button type='button' onClick={()=>claimAll()} className='btn-common'>
                        Claim All
                    </button>  
                </div>
            </div>           
        </div>        
    </>
)
}

export default MiningBank