import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { useWeb3React } from '@web3-react/core'
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

// import $ from "jquery";
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
//  Create WalletConnect Provider
// const provider = new WalletConnectProvider({
//     infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
// });
const Navbar = ({setNavActive, navActive}) => {

    const { account } = useWeb3React();
    const { login, logout } = useAuth();
    const [show, setShow] = useState(false)
    const [blueshow, setBlueShow] = useState(false)
    const connectMetaMask = () => {
        localStorage.setItem("connectorId", "injected")
        if (account) {
            logout()
        } else {
            login("injected")
        }
    }
    // const trustWallet = async () => {
    //     localStorage.setItem("connectorId", "walletconnect")
    //     if (account) {
    //         logout()
    //     } else {
    //         login("walletconnect")
    //     }
    // }
    const toggleShow = () => {
        setShow(!show)
        setNavActive(!navActive);
        if (blueshow === true) { setBlueShow(false) }
        // setBlueShow(!blueshow)
        // localStorage.setItem("show", show)
    }
    return (
        <>
            <section className="main-navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-11 mx-auto">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand text-sm-right text-center " href="/">
                                    <HashLink to='/'><img src="/hash-max-assets/header/logo.svg" className="img-fluid d-sm-block d-block logo_img" alt="" /></HashLink>
                                    {/* <HashLink to='/'><img src="/hash-max-assets/header/logo.svg" className="img-fluid d-sm-none d-block logo_img" alt="" /></HashLink> */}
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <div className="style-bar"></div>
                                    <div className="style-bar"></div>
                                    <div className="style-bar"></div>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mx-auto">
                                    </ul>
                                    <form className="form-inline my-2 my-lg-0">
                                        {/* <button className='btn-common'>Connect Wallet</button> */}
                                        {/* <HashLink className="nav-link" to="#roadmap">
                                ROADMAP
                            </HashLink> */}
                                    </form>
                                    {account ?
                                        <button className='btn-common button_design' onClick={connectMetaMask}>Disconnect Wallet</button>
                                        :
                                        <button className='btn-common button_design' onClick={connectMetaMask}>Connect Wallet</button>
                                    }
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <button onClick={toggleShow} className='burger-button'>{show ? <img src="/hash-max-assets/sidebar/hamburger-icon.svg" alt="" className='pb-1' /> : <i className="fa-solid common fa-bars"></i>}<i className="fa-solid fa-bars-filter"></i></button>
            </section>


            <div className="sidebar-main">
                <div className="container-fluid p-0">
                    <div className="row">
                        {/* <ddiv className={show ? "col-md-2 col-0 p-0 hidoo" : "col-md-0 col-0 p-0 hidoo"}> */}
                        <div className={show ? "sidebar-components sidebar-components2 d-block" : "sidebar-components sidebar-components2"}>
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                {/* <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"> */}
                                <Link to="/">
                                    <div className='sidebar-compo-innerContent pt-4'>
                                        <ul className="list-inline d-flex align-items-center">
                                            <li className="list-inline-item">
                                                <img src="hash-max-assets/sidebar/home-icon.svg" alt="" />
                                            </li>
                                            {show && <li className="list-inline-item pt-1">
                                                <h6>Home</h6>
                                            </li>
                                            }
                                        </ul>
                                    </div>
                                </Link>
                                {/* </a> */}
                                <a className="nav-link" href='#'>
                                    <div className='sidebar-compo-innerContent'>
                                        <ul onClick={() => { setBlueShow(!blueshow); setShow(true) }} className="list-inline d-flex align-items-center">
                                            <li className="list-inline-item">
                                                <img src="hash-max-assets/sidebar/exchange-icon.svg" alt="" />
                                            </li>
                                            {show && <>
                                                <li className="list-inline-item pt-1">
                                                    <h6>Trade</h6>
                                                </li>

                                                <li className="list-inline-item">
                                                    <img src="hash-max-assets/sidebar/arrow-icon.svg" alt="" />
                                                </li>
                                            </>}
                                        </ul>

                                    </div>
                                    {blueshow && <>
                                        <div className='sidebar-compo-innerContent blueBg'>
                                            <ul className="list-inline d-flex align-items-center">
                                                <li className="list-inline-item pt-1">
                                                    <a className='' href='https://swap.BabylonSwap.finance/#/swap'>Exchange</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='sidebar-compo-innerContent blueBg'>
                                            <ul className="list-inline d-flex align-items-center">
                                                <li className="list-inline-item pt-1">
                                                    <a className='' href='https://swap.BabylonSwap.finance/#/pool'>Liquidity</a>
                                                </li>
                                            </ul>

                                        </div>
                                    </>}
                                </a>
                                <a className="nav-link" href='https://farms.BabylonSwap.finance/farms'>
                                    <div className='sidebar-compo-innerContent'>
                                        <ul className="list-inline d-flex align-items-center">
                                            <li className="list-inline-item">
                                                <img src="hash-max-assets/sidebar/farms-icon.svg" alt="" />
                                            </li>
                                            {show && <li className="list-inline-item pt-1">
                                                <h6>Farms</h6>
                                            </li>
                                            }
                                        </ul>
                                    </div>
                                </a>

                                <a className="nav-link" href='https://farms.BabylonSwap.finance/miningBank'>
                                    <div className='sidebar-compo-innerContent'>
                                        <ul className="list-inline d-flex align-items-center">
                                            <li className="list-inline-item">
                                                <img src="hash-max-assets/sidebar/bank-icon.svg" alt="" />
                                            </li>
                                            {show && <li className="list-inline-item pt-1">
                                                <h6>MiningBank</h6>
                                            </li>
                                            }
                                        </ul>
                                    </div>
                                </a>
                                {/* <a className="nav-link" id="v-pills-free-tab" data-toggle="pill" href="#v-pills-free" role="tab" aria-controls="v-pills-settings" aria-selected="false"> */}
                                <Link to="/freeroutlet">
                                    <div className='sidebar-compo-innerContent'>
                                        <ul className="list-inline d-flex align-items-center">
                                            <li className="list-inline-item">
                                                <img src="hash-max-assets/sidebar/roulette-icon.svg" alt="" />
                                            </li>
                                            {show && <li className="list-inline-item pt-1">
                                                <h6>Free Roulette</h6>
                                            </li>
                                            }
                                        </ul>
                                    </div>
                                </Link>
                                {/* </a> */}

                                {/* <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"> */}
                                <Link to="/evanglism">
                                    <div className='sidebar-compo-innerContent'>
                                        <ul className="list-inline d-flex align-items-center">
                                            <li className="list-inline-item">
                                                <img src="hash-max-assets/sidebar/evangelism-icon.svg" alt="" />
                                            </li>
                                            {show && <li className="list-inline-item pt-1">
                                                <h6>Evangelism</h6>
                                            </li>
                                            }
                                        </ul>
                                    </div>
                                </Link>
                                <Link to="/glossary">
                                    <div className='sidebar-compo-innerContent'>
                                        <ul className="list-inline d-flex align-items-center">
                                            <li className="list-inline-item">
                                            <img src="\hash-max-assets\sidebar\book.svg" alt="" />
                                            </li>
                                            {show && <li className="list-inline-item pt-1">
                                                <h6>Glossary</h6>
                                            </li>
                                            }
                                        </ul>
                                    </div>
                                </Link>
                                {/* </a> */}
                            </div>
                            {show &&
                                <div className='sidebar-compo-footer '>
                                    <div className="footer-top-div d-flex justify-content-between pt-3 flex-">
                                        <ul className="list-inline d-flex align-items-center">
                                            <li className="list-inline-item">
                                                <img src="hash-max-assets/sidebar/sidebar-footer/small-logo.svg" alt="" />
                                            </li>
                                            <li className="list-inline-item pt-1">
                                                <h5>$0.0000</h5>
                                            </li>
                                        </ul>
                                        <ul className="list-inline d-flex align-items-center">
                                            <li className="list-inline-item">
                                                <img src="hash-max-assets/sidebar/sidebar-footer/world1.svg" alt="" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-logos d-flex justify-content-between pt-3 flex-wrap">
                                        <a target='_blank' href="https://t.me/AntikytheraLabs">  <img src="hash-max-assets/sidebar/sidebar-footer/telegram-icon.svg" alt="" /></a>
                                        <a target='_blank' href="https://twitter.com/BabylonSwap">   <img src="hash-max-assets/sidebar/sidebar-footer/twitter-icon.svg" alt="" /></a>
                                        <a target='_blank' href="https://twitter.com/antikytheralabs">   <img src="hash-max-assets/sidebar/sidebar-footer/twitter-icon.svg" alt="" /></a>
                                        <a target='_blank' href="http://github.com/AntikytheraLabs">   <img src="hash-max-assets/sidebar/sidebar-footer/github-icon.svg" alt="" /></a>
                                        <a target='_blank' href="https://youtube.com/channel/UC8mOfStVW_7Tx71sEPbgZbA">  <img src="/hash-max-assets/footer/youtube.png" className='youtube' alt="" /></a>
                                    </div>
                                </div>
                            }
                        </div>
                        {/* <div className="col-md-12 mx-auto col-12">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">{<FreeRoulette />}</div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                                <div className="tab-pane fade" id="v-pills-free" role="tabpanel" aria-labelledby="v-pills-free-tab">{<FreeRoulette />}</div>
                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-free-tab">{<Evanglism />}</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
