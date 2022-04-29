import React from 'react'
import { useCallback, useState } from "react";
import './freeroulette.scss'
import {
    Spinner,
    UserInfo,
    Claim
} from '../../hooks/Morocofetcher';

function FreeRoulette({active}) {
    const [txstatus, setTxstatus] = useState(false);

    const { Spinnerinner } = Spinner();
    const { Claiming } = Claim();
    const history = UserInfo();
    console.log("history we get here is", history?.totalParticipatedRound)
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
            const tx = await Claiming();
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
                                        <div className='anikatemd'>
                                            <img src="hash-max-assets/freeroulette/roulette.png" className='img-fluid animajsjsjs' alt="" />
                                            <img src="hash-max-assets/freeroulette/arrow.png" className='img-fluid upper_sss' alt="" />
                                        </div>
                                        <h2>Free Roulette</h2>
                                        {/* <p className='py-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p> */}
                                        <ul className="list-inline mt-5">
                                            <li className="list-inline-item">
                                                <button className='btn-common' onClick={Spinroult}>Free Roulette</button>
                                            </li>
                                            <li className="list-inline-item">
                                                <button className='btn-common' onClick={doClaim}>Claim</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-7  pt-lg-0 pt-5 my-auto">
                                    <div className="leftContainer common commonpsize">
                                        <h5 className='mb-3 font-weight-bold'>HISTORY</h5>
                                        <div class="table-responsive">
                                            <table class="table">
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
                                                    {/* <tr>
                                                        <th scope="row">25 Feb, 2022</th>
                                                        <td>-</td>
                                                        <td>LOSS</td>    
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">25 Feb, 2022</th>
                                                        <td>-</td>
                                                        <td>lOSS</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">25 Feb, 2022</th>
                                                        <td>0.2 BNB</td>
                                                        <td className='text-success'>WIN</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">25 Feb, 2022</th>
                                                        <td>-</td>
                                                        <td>LOSS</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">25 Feb, 2022</th>
                                                        <td>-</td>
                                                        <td>lOSS</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">25 Feb, 2022</th>
                                                        <td>0.2 BNB</td>
                                                        <td className='text-success'>WIN</td>

                                                    </tr>
                                                    <tr>
                                                        <th scope="row">25 Feb, 2022</th>
                                                        <td>0.2 BNB</td>
                                                        <td className='text-success'>WIN</td>

                                                    </tr> */}
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