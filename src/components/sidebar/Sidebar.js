import { React, useState } from 'react'
import { useEffect } from 'react'
import './sidebar.scss'
function Sidebar() {
    const [show, setShow] = useState(false)
    const toggleShow = () => {
        setShow(!show)
    }
    console.log(show)

    return (
        <>
            <div className="sidebar-main">
                <div className="container-fluid p-0">
                    <div className="row">
                        <div className={show ? "col-2 p-0" : "col-0 p-0"}>
                            <div className="sidebar-components">
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
                                <div className='sidebar-compo-innerContent'>
                                    <ul className="list-inline d-flex align-items-center">
                                        <li className="list-inline-item">
                                            <img src="hash-max-assets/sidebar/swap-icon.svg" alt="" />
                                        </li>
                                        {show && <li className="list-inline-item pt-1">
                                            <h6>Exchange</h6>
                                        </li>
                                        }
                                    </ul>
                                </div>
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
                                <div className='sidebar-compo-innerContent'>
                                    <ul className="list-inline d-flex align-items-center">
                                        <li className="list-inline-item">
                                            <img src="hash-max-assets/sidebar/staking-icon.svg" alt="" />
                                        </li>
                                        {show && <li className="list-inline-item pt-1">
                                            <h6>Staking</h6>
                                        </li>
                                        }
                                    </ul>
                                </div>
                                <div className='sidebar-compo-innerContent'>
                                    <ul className="list-inline d-flex align-items-center">
                                        <li className="list-inline-item">
                                            <img src="hash-max-assets/sidebar/more-icon.svg" alt="" />
                                        </li>
                                        {show && <li className="list-inline-item pt-1">
                                            <h6>More</h6>
                                        </li>
                                        }
                                    </ul>
                                </div>
                                {show &&
                                    <div className='sidebar-compo-footer '>
                                        <div className="footer-top-div d-flex justify-content-between pb-3 flex-wrap">
                                            <ul className="list-inline d-flex align-items-center">
                                                <li className="list-inline-item">
                                                    <img src="hash-max-assets/sidebar/sidebar-footer/small-logo.svg" alt="" />
                                                </li>
                                                <li className="list-inline-item pt-1">
                                                    <h6>$0.50</h6>
                                                </li>
                                            </ul>
                                            <ul className="list-inline d-flex align-items-center">
                                                <li className="list-inline-item">
                                                    <img src="hash-max-assets/sidebar/sidebar-footer/world1.svg" alt="" />
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="footer-logos d-flex justify-content-between pt-3 flex-wrap">
                                            <a target='_blank' href="">  <img src="hash-max-assets/sidebar/sidebar-footer/telegram-icon.svg" alt="" /></a>
                                            <a target='_blank' href="">   <img src="hash-max-assets/sidebar/sidebar-footer/twitter-icon.svg" alt="" /></a>
                                            <a target='_blank' href="">   <img src="hash-max-assets/sidebar/sidebar-footer/github-icon.svg" alt="" /></a>
                                            <a target='_blank' href="">  <img src="hash-max-assets/sidebar/sidebar-footer/facebook-icon.svg" alt="" /></a>
                                            <a target='_blank' href="">  <img src="hash-max-assets/sidebar/sidebar-footer/discord-icon.svg" alt="" /></a>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-10 mx-auto">
                            <button className='burger-button btn-danger'><p className='text-white'>{show ? 'Hide' : 'Show'}</p></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar