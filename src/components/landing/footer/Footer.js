import React from 'react';
import './footer.scss';
import { setupNetwork, registerToken } from '../../../utils/wallet';

// const BNBAddress = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52';
// const BNBSymbol = 'BNB';
// const BNBDecimals = 18;
// const BNBImage = '/tokens/BNB.png'

const XBTAddress = '0x6Cce1fef6247b722944cdA1e555754a830680F6E';
const XBTSymbol = 'XBT';
const XBTDecimals = 18;
const XBTImage = 'https://babylonswap.finance/tokens/ANTI.jpg'

const Footer = () => {
    // const calladdnetwork = () => {
    //     setupNetwork();
    // }

    const addXBTToken = () => {
        registerToken(XBTAddress, XBTSymbol, XBTDecimals, XBTImage);
    }

    return (
        <>
            <section className="main-footer">
                <div className="container-fluid ptb footer-inner0">
                    <div className="text-center mb-4 w-100">                      
                       <button type="button" onClick={addXBTToken} className='btn-common px-5 py-3'>Add XBT To MetaMask</button> 
                    </div>
                    {/* <div className="button-inner-div text-center px-sm-5 mx-4 px-2">
                        
                        <button className='btn-common-outline'>AppleX</button>
                        <button className='btn-common-outline'>Amazonx</button>
                        <button className='btn-common-outline'>AvalancheX</button>
                        <button className='btn-common-outline'>AlibabaX</button>
                        <button className='btn-common-outline'>BoeingX</button>
                        <button className='btn-common-outline'>BinanceCoinX</button>
                        <button className='btn-common-outline'>BitcoinX</button>
                        <button className='btn-common-outline'>BUSDX</button>
                        <button className='btn-common-outline'>DaiX</button>
                        <button className='btn-common-outline'>WaltDisneyX</button>
                        <button className='btn-common-outline'>DowJones30X</button>
                        <button className='btn-common-outline'>DigitalWorldAcquisitionCorpX</button>
                        <button className='btn-common-outline'>EurekaCoinX</button>
                        <button className='btn-common-outline'>EthereumX</button>
                        <button className='btn-common-outline'>MetaX</button>
                        <button className='btn-common-outline'>FontomX</button>
                        <button className='btn-common-outline'>GameStopX</button>
                        <button className='btn-common-outline'>GoldX</button>
                        <button className='btn-common-outline'>AlphabetX</button>
                        <button className='btn-common-outline'>IPXX</button>
                        <button className='btn-common-outline'>JumiaX</button>
                        <button className='btn-common-outline'>JPMorganX</button>
                        <button className='btn-common-outline'>CocaColaX</button>
                        <button className='btn-common-outline'>ChainlinkX</button>
                        <button className='btn-common-outline'>DecentralandX</button>
                        <button className='btn-common-outline'>ManchesterUnitedX</button>
                        <button className='btn-common-outline'>PolygonX</button>
                        <button className='btn-common-outline'>McDonald’sX</button>
                        <button className='btn-common-outline'>MicrosoftX</button>
                        <button className='btn-common-outline'>NaturalGasX</button>
                        <button className='btn-common-outline'>NetflixX</button>
                        <button className='btn-common-outline'>NioX</button>
                        <button className='btn-common-outline'>SPX500X</button>
                        <button className='btn-common-outline'>SquareX</button>
                        <button className='btn-common-outline'>TeslaX</button>
                        <button className='btn-common-outline'>TUSDX</button>
                        <button className='btn-common-outline'>USDCX</button>
                        <button className='btn-common-outline'>USDTX</button>
                        <button className='btn-common-outline'>MoneroX</button>
                        <button className='btn-common-outline'>ZoomX</button>
                        <button className='btn-common-outline'>DirhamX</button>
                        <button className='btn-common-outline'>MASIX</button>
                        <button className='btn-common-outline'>MADEXX</button>
                        <button className='btn-common-outline'>Tether USDT</button>
                        <button className='btn-common-outline'>USDC</button>
                        <button className='btn-common-outline'>USDC</button>
                        <button className='btn-common-outline'>BUSD</button>
                        <button className='btn-common-outline'>ETH</button>
                        <button className='btn-common-outline'>BTCB</button>
                        <button className='btn-common-outline'>LINK</button>
                        <button className='btn-common-outline'>DAI</button>
                        <button className='btn-common-outline'>LTC</button>
                        <button className='btn-common-outline'>CAKE</button>
                        <button className='btn-common-outline'>SING</button>
                        <button className='btn-common-outline'>BAT</button>
                        <button className='btn-common-outline'>BinanceCoin</button>
                        <button className='btn-common-outline'>LigaX</button>
                    </div> */}
                </div>
                <div className="container-fluid footer-inner">
                    <div className="container p-0">
                        <div className="row">
                            <div className="col-lg-3 pl-lg-0 ml-0 col-md-3 col-12 my-auto">
                                <div className="inner-icon text-center mt-md-0 mt-3">
                                    <img src="/hash-max-assets/header/logo.svg" className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 d-lg-block d-none col-0 my-auto pt-2">
                            </div>

                            <div className="col-lg-4 col-md-9 pt-2 mx-auto  my-auto">
                                <div className="inner-icon">

                                    <ul className="list-inline yo iconUl text-center ptb20">
                                        {/* <li className="list-inline-item iconLi">
                                            <div className="for-mobile">
                                                <a className="" href='' target="_blank">
                                                    <img src="/hash-max-assets/footer/discord.png" className="img-fluid" alt="" />
                                                </a>

                                            </div>

                                        </li> */}
                                        <li className="list-inline-item iconLi">
                                            <div className="for-mobile">

                                                <a className="" href='https://twitter.com/BabylonSwap' target="_blank">
                                                    <img src="/hash-max-assets/footer/twitter.png" className="img-fluid" alt="" />
                                                </a>
                                            </div>

                                        </li>
                                        <li className="list-inline-item iconLi">
                                            <div className="for-mobile">

                                                <a className="" href='https://twitter.com/antikytheralabs' target="_blank">
                                                    <img src="/hash-max-assets/footer/twitter.png" className="img-fluid" alt="" />
                                                </a>
                                            </div>

                                        </li>
                                        <li className="list-inline-item iconLi">
                                            <div className="for-mobile">

                                                <a className="" href='https://t.me/AntikytheraLabs' target="_blank">
                                                    <img src="/hash-max-assets/footer/telegram.png" className="img-fluid" alt="" />
                                                </a>
                                            </div>

                                        </li>
                                        {/* <li className="list-inline-item iconLi">
                                            <div className="for-mobile">
                                                <a className="" href='' target="_blank">
                                                    <img src="/hash-max-assets/footer/medium.png" className="img-fluid" alt="" />
                                                </a>

                                            </div>

                                        </li> */}
                                        {/* <li className="list-inline-item iconLi">
                                            <div className="for-mobile">
                                                <a className="" href='' target="_blank">
                                                    <img src="/hash-max-assets/footer/reddit.png" className="img-fluid" alt="" />
                                                </a>

                                            </div>
  
                                        </li> */}
                                        <li className="list-inline-item iconLi">
                                            <div className="for-mobile">
                                                <a className="" href='https://youtube.com/channel/UC8mOfStVW_7Tx71sEPbgZbA' target="_blank">
                                                    <img src="/hash-max-assets/footer/youtube.png" className="img-fluid" alt="" />
                                                </a>

                                            </div>

                                        </li>
                                        <li className="list-inline-item iconLi">
                                            <div className="for-mobile">
                                            <a target='_blank' href="http://github.com/AntikytheraLabs">   <img src="hash-max-assets/sidebar/sidebar-footer/github-icon.svg" className='footer-gito' alt="" /></a>

                                            </div>

                                        </li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer;
