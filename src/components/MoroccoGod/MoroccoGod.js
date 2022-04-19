import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Footer from '../landing/footer/Footer'
import './morocogod.scss'

function MoroccoGod({ active }) {

    console.log("========", active)

    return (
        <div>
            {/* <section className="main-navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="/">
                                <img src="/hash-max-assets/header/logo.svg" className="img-fluid logo_img logo_img2" alt="" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <div class="style-bar"></div>
                                    <div class="style-bar"></div>
                                    <div class="style-bar"></div>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mx-auto">

                                    </ul>
                                    <form className="form-inline my-2 my-lg-0">
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section> */}
            <section className={active ? 'top-cards-div pt-4 ml-5' : 'top-cards-div pt-4'}>
                <div className="container-fluid">
                    <h2 className='text-center ptb text-dark'>Trust Open Code</h2>
                    <div className="row px-sm-0 px-4">
                        <div className="col-md-9 col-12 mx-auto">                           
                            <div className='w-100'>
                                <div className="innerCards text-center">
                                    <h4>Play Free Roulette</h4>
                                    <p className='mt-1'>Earn Money For Free</p>
                                </div>
                            </div>                           
                        </div>
                        <div className="col-md-9 col-12 mt-4 mx-auto">                            
                            <div className='w-100'>
                                <div className="innerCards text-center">
                                    <h4>Swap Digital Assets</h4>
                                    <p className='mt-1'>Trade Everything You Want</p>
                                </div>
                            </div>                           
                        </div>
                        <div className="col-md-9 col-12 mt-4 mx-auto">                           
                            <div className='w-100'>
                                <div className="innerCards text-center">
                                    <h4>Earn Yields On Your Digital Assets</h4>
                                    <p className='mt-1'>The Banks and the Farms offer sustainable consistent yields to make you maximally wealthy with zero risk because the BabylonSwap automated unalterable parameters are mathematically guaranteed and 100% verifiable via open source code. Thanks to Arbitrage and the Locking of Liquidity and the revolutionary Antikythera ecosystem, BabylonSwap is mathematically guaranteed forever.</p>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>

            </section>
            <div className={active ? "freeroulette-main ml-5" : "freeroulette-main"}>
                <div className="container-fluid">
                    <div className="row ptb">

                        <div className="col-10 mx-auto">
                            <div className="row ptb">
                                <div className="col-lg-6 mx-auto">
                                    <div className="">
                                        {/* <ul className="list-inline mt-4 d-flex justify-content-between flex-wrap">
                                            <li className="list-inline-item">
                                                <HashLink to='/'>  <button className='btn-common'>BabylonSwap</button> </HashLink>
                                            </li>
                                            <li className="list-inline-item">
                                                <HashLink to='/underService'>  <button className='btn-common'>BabylonSwap Website</button></HashLink>
                                            </li>
                                        </ul> */}
                                        <img src="hash-max-assets/freeroulette/god.png" className='img-fluid my-4 w-100' alt="" />
                                        <div className='mt-2'>
                                            <h6 className='common mb-1'>Blockchain Technology:</h6>
                                            <p>Father, I need to talk to you. Please, Father, appear to me.</p>
                                        </div>
                                        <div className='mt-4'>
                                            <p className='common mb-1'>(Flash of Light)</p>
                                        </div>
                                        <div className='mt-4'>
                                            <h6 className='common mb-1'>God:</h6>
                                            <p>What is it, my child?</p>
                                        </div>
                                        <div className='mt-4'>
                                            <h6 className='common mb-1'>Blockchain Technology:</h6>
                                            <p>Father, everyone is starting to pay attention to me again because of Antikythera. Huh-I'm kinda making a comeback!</p>
                                        </div>
                                        <div className='mt-4'>
                                            <h6 className='common mb-1'>God:</h6>
                                            <p>Yea, like John Travolta before you. You are experiencing a second revival.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={active ? "rainbow ptb20 ml-5" : "rainbow ptb20"}>
                <div className="row">
                    <div className="col-lg-7 col-10 mx-auto">
                        <div className='inner-book'>
                            <img src="/compressor/page-one.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-two.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-three.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-four.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-five.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-six.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-seven.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-eight.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-nine.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-ten.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-eleven.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-twelve.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-thirteen.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-fourteen.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-fifteen.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-sixteen.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-seventeen.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-eighteen.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-nineteen.png" className='img-fluid my-4 w-100' alt="" />

                            <img src="/compressor/page-twenty.png" className='img-fluid my-4 w-100' alt="" />
                        </div>
                    </div>
                </div>
                <div className="container ptb">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Audited By:</h2>
                        </div>
                        <div className="col-12 mt-5 text-center text-dark my-4">
                            <h4>Moroccan Blockchain Audit Firm ChekkSoft</h4>
                            <img src="/compressor/first.jpg" className='img-fluid my-5 px-4' alt="" />
                        </div>
                        <div className="col-12 mt-5 text-center text-dark my-4">
                            <h4>Swiss Blockchain Audit Firm GYBX</h4>
                            <img src="/compressor/second.jpg" className='img-fluid rounded my-5' alt="" />
                        </div>
                        <div className="col-12 mt-5 text-center text-dark my-4">
                            <h4>French Blockchain Audit Firm Solidité</h4>
                            <img src="/compressor/third.jpg" className='img-fluid my-5' alt="" />
                        </div>
                        <div className="col-12 mt-5 text-cener px-5  text-dark my-4">
                            <h6> {`=>`} BabylonSwap is 100% Open Source and its deployed Smart Contracts can be Fully Audited by Anybody at any time. Please learn the programming language “Solidity” and Audit the contracts by Yourself to understand the power of BabylonSwap.</h6>
                            <p className="mt-3">Brave New Babylon scales to infinity thanks to the BabylonSwap Block Reward System</p>
                            <p className="mt-3">
                                Due to Arbitrage and the Automated Locking of Liquidity there will always be trading activity on BabylonSwap. This means there will always be a Block Reward coming from BabylonSwap (on top of the collected transaction fees) that Brave New Babylon Validators receive for validating the Brave New Babylon Blockchain.
                            </p>
                            <h6 className="mt-3">
                                {`=>`}  This BabylonSwap Block Reward goes to the same wallet that received the last On-Chain Block Reward. 
                            </h6>
                            <h6 className="mt-3">
                                {`=>`} If Block Ratio of the Validated Block is 90% or higher, then BabylonSwap Block Reward is distributed as follow:
                            </h6>
                            <ul className="mt-3 ">
                                <li>Paid BabylonSwap Block Reward = 0</li>
                                <li>Unpaid BabylonSwap Block Reward = 100% of BabylonSwap Block Reward</li>
                                <li>Unpaid BabylonSwap Block Reward is rolled up to the next BabylonSwap Block Reward:</li>
                                <li>Next BabylonSwap Block Reward = Current Unpaid BabylonSwap Block Reward + Next BabylonSwap Block Reward</li>
                            </ul>
                            <p className="mt-3">
                                As you can see BabylonSwap offers the economic incentive necessary to insure that the Brave New Babylon Block Size Limit will always adapt to the macro environment thus allowing infinite scalability. No more scaling debates in the Blockchain space because Brave New Babylon now scales to infinity thanks to BabylonSwap
                            </p>
                            <p className="mt-3">
                                Before the invention of BabylonSwap, miners and validators had to rely solely on the weak limited stream of income that comes from On-Chain activity. This made it impossible for them to scale the Block Size Limit up in a way that will allow infinite scalability. They needed an ever-growing stream of income guaranteed by Math and Logic so that they can finally have the economic incentive necessary to scale Blockchain up to infinity. Blockchain Technology needed a disciple of Satoshi who understands the economic part of the equation. Nabil Amrani has more than a decade of expertise in the global financial sector managing one of the most profitable Hedge Funds in history. Amrani’s R&D department had all the time in the world to thoroughly study the Blockchain scaling issue and come up with a flawless solution to this problem once and for all. BabylonSwap is the long-awaited economic solution that will allow Brave New Babylon Blockchain to finally scale up to infinity and host the new global internet.
                            </p>
                            {/* <div className="text-center">
                                <button className='btn-common px-5 py-3 mt-5'>MoroccoX</button>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className={active ? "ml-footer" : ""}>
                <Footer />
            </div>

        </div>
    )
}

export default MoroccoGod