import React, { useState, useCallback } from 'react'
import './evanglism.scss'
import Evangelisms from '../../hooks/evangelism';
// import { useWeb3React } from '@web3-react/core';
import ClaimFunc from '../../hooks/Claim';
import { toast } from 'react-toastify';
import Web3 from 'web3';

function Evanglism({ active }) {
    const [valueevanga, setvalueevanga] = useState();
    const [sponseraddresError, setsponseraddresError] = useState('')
    // const { account } = useWeb3React();

    // const [accountclaim, setaccountclaim] = useState([]);
    // console.log("acccount detail we get",accountclaim)
    // useEffect(() => {
    //     setaccountclaim(account)
    //   }, [account]);
    const { Evangelio } = Evangelisms();
    const { claimeva } = ClaimFunc();
    const handlechange = (e) => {
        setvalueevanga(e.target.value)
    }
    const result = Web3.utils.isAddress(valueevanga)
    const formValidation = () => {
        const sponseraddresError = {}
        let isValid = true;
        if (valueevanga !== '' && result === false) {
            sponseraddresError.spoError = "invalid address";
            isValid = false;
        }
        setsponseraddresError(sponseraddresError)
        return isValid;
    }
    // console.log("we have evangalism value here is ",valueevanga)

    const Evangolism = useCallback(async () => {
        formValidation()
        try {
            // setShowLoader(true)
            // setOpens(true);
            const tx = await Evangelio(valueevanga);
            // console.log("tax status we get here is",tx.status)
            if (tx.status) {
                window.$("#exampleModal").modal("hide");
                toast.success('Evangelism Successfully Added', {
                    position: "top-right",
                    autoClose: 5000,
                });
                //    console.log('payment done')
                // await setstackbalance("");
                // setOpens(false);
                // window.location.reload();
                // await getStakedbalance();
                // setShowLoader(false)
                // setInputBusd('')
                // close()
            }
            else {
                console.log('payemnt not done')
            }
        } catch (err) {
            // setOpens(false);
            // setShowLoader(false)
            console.log("err22", err);
        }
    });

    const ClaimEvanglio = useCallback(async () => {
        formValidation()
        try {
            // setShowLoader(true)
            // setOpens(true);
            const tx = await claimeva([]);
            // console.log("tax status we get here is",tx.status)
            if (tx.status) {
                // window.$("#exampleModal").modal("hide");
                toast.success('Claim Successfully ', {
                    position: "top-right",
                    autoClose: 5000,
                });
                //    console.log('payment done')
                // await setstackbalance("");
                // setOpens(false);
                // window.location.reload();
                // await getStakedbalance();
                // setShowLoader(false)
                // setInputBusd('')
                // close()
            }
            else {
                console.log('payemnt not done')
            }
        } catch (err) {
            // setOpens(false);
            // setShowLoader(false)
            console.log("err22", err);
        }
    });

    return (
        <>
            {/* <Navbar /> */}
            <div className={active ? "evanglism-main ml-5" : "evanglism-main"}>
                <div className="container-fluid">
                    <div className="row  ptb">
                        <div className="col-sm-8 col-10 mx-auto text-cnter">
                            <p>Every Whitelisted Address is linked in a smart contract to its Downline Addresses (the addresses that whitelisted that address by adding it as their Evangelist’s Address + the addresses that are 10 levels below the whitelisted address)</p>
                            <p className='mt-3'>Every Whitelisted Address collects a Credit which is equal to the Downline Address’ Level’s coefficient times the Downline Address’ Total Earnings in BabylonSwap from Free Roulette and Farms and Banks (calculated in ANTI in real-time based on the price feed of BabylonSwap)</p>
                            <p className='mt-3'>Credit = Level Coefficient x referral earnings calculated in ANTI</p>
                            <p className='mt-3'>The Level Coefficient of the BabylonSwap earnings of each Level of the Evangelist’s downline:</p>
                            <ul className='customList'>
                             <li>Level 1: 1</li>
                                <li>Level 2: 2</li>
                                <li>Level 3: 3</li>
                                <li>Level 4: 4</li>
                                <li>Level 5: 5</li>
                                <li>Level 6: 6</li>
                                <li>Level 7: 7</li>
                                <li>Level 8: 8</li>
                                <li>Level 9: 9</li>
                                <li>Level 10: 10</li>
                            </ul>
                            <p className='mt-3'>An Evangelist collects Credits and has a Credit Ratio</p>
                            <p className='mt-3'>Credit Ratio = Evangelist Credit / Total Credit By All BabylonSwap Evangelists</p>
                            <p className='mt-3'>The trade fee and LP tax that comes from BabylonSwap to Evangelists is automatically distributed proportionally to all Evangelists based on their Credit Ratio. For example an Evangelist with a Credit Ratio of 15% will receive 15% of what came to Evangelists from BabylonSwap</p>
                            <ul className="list-inline mt-4">
                                <li className="list-inline-item">
                                    <button className='btn-common' data-toggle="modal" data-target="#exampleModal">
                                        Add Evangelist
                                    </button>
                                </li>
                                <li className="list-inline-item">
                                    <button type='button' onClick={ClaimEvanglio} className='btn-common'>
                                        Harvest
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* //modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title text-center w-100" id="exampleModalLabel">Address of Sponser</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input type="text" onChange={handlechange} placeholder='address of sponser' className='w-100' />
                            {Object.keys(sponseraddresError).map((key) => { return <p className="inputErrors">{sponseraddresError[key]}</p> })}
                        </div>
                        <div class="modal-footer justify-content-center">
                            {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
                            <button type="button" onClick={Evangolism} class=" btn-common">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Evanglism