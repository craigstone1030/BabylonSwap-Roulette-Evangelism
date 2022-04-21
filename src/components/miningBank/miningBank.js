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
    const [tokenAddress, setTokenAddress] = useState(null)
    const handlechange = (e) => {
        setTokenAddress(e.target.value)
    }

    const claim = (tokenInfo, amount) => {          
         
    }

    const claimAll = () => {
        console.log('cliam all tokens')
    }
    
    const getBalance = () => {
        console.log('get balance');
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

const getTokenItemHtml = (item, number) => {
    return (
        <div className="col-12" key={number}>
            <div className="row align-items-center justify-content-center">
                <div className="col-6">
                    <input type="text" class="address-input" onChange={handlechange} />
                </div>
                
                <div className="col-2">
                    <button type='button' onClick={()=>getBalance(item)} className='btn-common'>
                        Get Balance
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