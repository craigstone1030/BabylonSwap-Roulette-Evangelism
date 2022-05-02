import React, { useCallback, useState } from 'react'
import './miningBank.scss';
import { useWeb3React } from '@web3-react/core';
import { toast } from 'react-toastify';
import {
   Claiming,
   ClaimingAll
} from '../../hooks/miningBank';

function MiningBank() {
   
    const [txstatus, setTxstatus] = useState(false);
    const { account } = useWeb3React();
    const [tokenAddress, setTokenAddress] = useState(null)
    const [tokenAddressStatus, setTokenAddressStatus] = useState(false)
    const { doClaim } = Claiming(tokenAddress);
    const { allClaim } = ClaimingAll();
    const handlechange = (e) => {
        setTokenAddress(e.target.value)

        if (e.target.value) {
            setTokenAddressStatus(true);
        } else { 
            setTokenAddressStatus(false);
        }
    }

    const claim = useCallback(async () => {
        validateAmount(tokenAddress);

        try {
            const tx = await doClaim(tokenAddress);
            if (tx.status) {
                await setTxstatus(tx.status);               
            }
        } catch (err) {            
            console.log("err22", err);
        }
    });

    const claimAll = useCallback(async () => {
        console.log('cliam all tokens')
        try {
            const tx = await allClaim();
            if (tx.status) {
                await setTxstatus(tx.status);               
            }
        } catch (err) {            
            console.log("err22", err);
        }
    });
    
    // const getBalance = () => {
    //     console.log('get balance');
    //     window.$("#exampleModal").modal();
    // }

    // validate token address
    const validateAmount = (tokenAddress) => {
        if (tokenAddress == null) {
            toast.error('Please input correct token address', {
                position: "top-right",
                autoClose: 5000,
            });

            return false;
        } else {
            return true;
        }
    }

// const getTokenItemHtml = (item, number) => {
//     return (
//         <div className="col-12" key={number}>
//             <div className="row align-items-center justify-content-center">
//                 <div className="col-6">
//                     <input type="text" className="address-input" onChange={handlechange} />
//                 </div>
                
//                 <div className="col-2">
//                     <button type='button' onClick={()=>getBalance(item)} className='btn-common'>
//                         Get Balance
//                     </button>                    
//                 </div>                
//             </div>            
//         </div>
//     )
// }

return (
    <>
        {/* <Navbar /> */}
        <div className="converter-main">
            <div className="container text-center">
                <div className="row pt-2">
                    <div className="col-12">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-9">
                                <input type="text" className="address-input" onChange={handlechange} placeholder="Input the token address to claim"/>
                            </div>
                            
                            {/* <div className="col-2">
                                <button type='button' onClick={()=>getBalance()} className='btn-common' disabled={!tokenAddressStatus}>
                                    Get Balance
                                </button>                    
                            </div>                 */}
                        </div>            
                    </div>
                    {/* {
                        tokens.map((item, key) => {
                            return getTokenItemHtml(item, key)
                        })
                    } */}
                </div>
                <div className="col-12 text-center">
                    <button type='button' onClick={()=>claim()} className='btn-common mr-5' disabled={!(tokenAddressStatus && account)}>
                        Claim
                    </button>  
                    <button type='button' onClick={()=>claimAll()} className='btn-common mt-3'>
                        Claim All
                    </button>  
                </div>
            </div>           
        </div>       

        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title text-center w-100" id="exampleModalLabel">Address of Sponser</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/* <input type="text" onChange={handlechange} placeholder='address of sponser' className='w-100' />
                        {Object.keys(sponseraddresError).map((key) => { return <p className="inputErrors">{sponseraddresError[key]}</p> })} */}
                    </div>
                    <div className="modal-footer justify-content-center">
                        {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
                        <button type="button" onClick={console.log()} className=" btn-common">Submit</button>
                    </div>
                </div>
            </div>
        </div> 
    </>
)
}

export default MiningBank