import React from 'react'
import { useCallback, useState } from "react";
import './freeroulette.scss'
import {
    Spinner,
    UserInfo,
    Claim,
    AddNewRound
} from '../../hooks/RouletteFetcher';

function FreeRoulette({active}) {
    const [txstatus, setTxstatus] = useState(false);

    const { Spinnerinner } = Spinner();
    const { handleClaim } = Claim();
    const { handleAddingNewRound } = AddNewRound();
    const history = UserInfo();
    const [rewardAmount, setRewardAmount] = useState(0);
    
    const Spinroult = useCallback(async () => {
        try {
            // setShowLoader(true)
            // setOpens(true);
            const tx = await Spinnerinner();
            // console.log("we get spinner result here is ", tx)
            if (tx.status) {
                await setTxstatus(tx.status);
                // await setstackbalance("");
                // setOpens(false);
                // window.location.reload();
                // await getStakedbalance();
                // setShowLoader(false)
                // setInputBusd('')
                // close()
            }
        } catch (err) {
            // setOpens(false);
            // setShowLoader(false)
            console.log("err22", err);
        }
    });

    const doClaim = useCallback(async () => { 
        try {
            const tx = await handleClaim();
            if (tx.status) {
                await setTxstatus(tx.status);               
            }
        } catch (err) {            
            console.log("err22", err);
        }
    });

    const doAddNewRound = useCallback(async () => {
        try { 
            setRewardAmount(10000);
            console.log('setRewardAmount', rewardAmount)
            const tx = await handleAddingNewRound(rewardAmount);
            if (tx.status) {
                await setTxstatus(tx.status);               
            }
        } catch (err) {            
            console.log("err22", err);
        }
    });

    return (
        <div>
            <div className={active?"freeroulette-main ml-5":"freeroulette-main"}>
                <div className="container-fluid p-0">
                    <div className="row ">
                        <div className="col-lg-9 mx-auto">
                            <div className="row ptb">
                                <div className="col-lg-5">
                                    <div className="leftContainer aniatess text-center">
                                        <h2>Free Roulette</h2>
                                        <div className='anikatemd'>
                                            <img src="hash-max-assets/freeroulette/roulette.png" className='img-fluid animajsjsjs' alt="" />
                                            <img src="hash-max-assets/freeroulette/arrow.png" className='img-fluid upper_sss' alt="" />
                                        </div>
                                        {/* <p className='py-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p> */}
                                        <ul className="list-inline mt-5">
                                            <li className="list-inline-item">
                                                <button className='btn-common' onClick={Spinroult}>Free Roulette</button>
                                            </li>
                                            <li className="list-inline-item">
                                                <button className='btn-common' onClick={doClaim}>Claim</button>
                                            </li>
                                            <li className="list-inline-item">
                                                <button className='btn-common' onClick={doAddNewRound}>Add New Round</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-7  pt-lg-0 pt-5 my-auto">
                                    <div className="leftContainer common commonpsize">
                                        <h5 className='mb-3 font-weight-bold'>HISTORY</h5>
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Total Participated</th>
                                                        <th scope="col">Last Round</th>
                                                        <th scope="col">Last Index</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">{history?.totalParticipatedRound}</th>
                                                        <td>{history?.lastRound}</td>
                                                        <td className='text-success'>{history?.lastIndex}</td>
                                                    </tr>                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeRoulette