import React from 'react';
import { Link } from 'react-router-dom';
import bagIcon from '../../images/bag-icon.svg';
import logo from '../../images/Logo-top.png';
import searchIcon from '../../images/search-icon.svg';

const HeaderNav = () => {
    return (
        <div>
            <div className="nav-container">
                <nav>
                    <ul className="mobile-nav">
                        <li>
                            <div className="menu-icon-container">
                                <div className="menu-icon">
                                    <span className="line-1"></span>
                                    <span className="line-2"></span>
                                </div>
                            </div>
                        </li>

                        <li>
                            <img src={logo}  className="link-logo" alt="logo of Tars Binary" />
                        </li>

                        <li>
                            <img id="bag" className="link-bag" src={bagIcon} alt="bag icon"></img>
                            {/* <Link to="/" className="link-bag"></Link> */}
                        </li>
                    </ul>

                    <ul className="desktop-nav">
                        <li>
                            <img src={logo} style={{ paddingBottom: "-10px" }} className="link-logo" alt="logo of Tars Binary" />
                        </li>
                        <li>
                            <Link to="/">Defence Projects</Link>
                        </li>
                        <li>
                            <Link to="/">Engineering School</Link>
                        </li>
                        {/*  <li>
                            <Link to="/">Engineering Volunteers</Link>
                        </li> */}
                        <li>
                            <Link to="/">Directors Notes</Link>
                        </li>
                        <li>
                            <Link to="/">Administration</Link>
                        </li>
                        {/*   <li>
                            <Link to="/">Board Members</Link>
                        </li> */}
                        {/*  <li>
                            <Link to="/">Events</Link>
                        </li> */}
                        <li>
                            <Link to="/">Gellary</Link>
                        </li>
                        <li>
                            <Link to="/">Document</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <img src={searchIcon} alt="searchIcon"></img>

                        </li>
                        <li>
                            <img className="link-bag" src={bagIcon} alt="bag icon"></img>
                        </li>
                    </ul>
                </nav>


                <div className="search-container hide">
                    <img src={searchIcon} alt="searchIcon"></img>

                    <div className="search-bar">
                        <form action="">
                            <input type="text" placeholder="Search Tarsbinary.net" />
                        </form>
                    </div>
                    <div className="link-close"></div>


                </div>


                <div className="mobile-search-container">

                    <img src={searchIcon} alt="searchIcon"></img>
                    <div className="search-bar">
                        <form action="">
                            <input type="text" placeholder="Search Tarsbinary.net" />
                        </form>
                    </div>
                    <span className="cancel-btn">Cancel</span>


                </div>


            </div>


            <div className="overlay"></div>
        </div>
    );
};

export default HeaderNav;