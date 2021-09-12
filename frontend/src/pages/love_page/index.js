import React from 'react';

import Logo from '../../assets/images/logo.png';
import homeImage from '../../assets/images/menu/Home.png';
import loveImage from '../../assets/images/menu/Love.png';
import categoryImage from '../../assets/images/menu/Category.png';
import settingsImage from '../../assets/images/menu/Settings.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className="section-padding">
                <header className="container">
                    <nav className="navbar is-shadow" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/">
                                <img src={Logo}></img>
                                <h1 className="subtitle is-3">My</h1>
                                <h1 className="title is-3">CookBook</h1>
                            </a>
                        </div>
                    </nav>
                    <hr></hr>
                </header>
            </section>
            <section className="section-padding search">
                <div className="container">
                    <div className="field has-addons">
                        <p className="control">
                            <input className="input" type="text" placeholder="Bolo de Cenoura..."></input>
                        </p>
                        <p className="control">
                            <a className="button">
                                <i class="fas fa-search"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            <section className="footer">
                <nav className="navbar is-shadow is-dark" role="navigation" aria-label="main navigation">
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item" to="/">
                                <div className="menu-item">
                                    <img src={homeImage}></img>
                                    <p>Home</p>
                                </div>
                            </Link>
                            <Link className="navbar-item is-active" to="love">
                                <div className="menu-item">
                                    <img src={loveImage}></img>
                                    <p>Love</p>

                                </div>
                            </Link>
                            <Link className="navbar-item" to="category">
                                <div className="menu-item">
                                    <img src={categoryImage}></img>
                                    <p>Category</p>

                                </div>
                            </Link>
                            <Link className="navbar-item" to="settings">
                                <div className="menu-item">
                                    <img src={settingsImage}></img>
                                    <p>Settings</p>

                                </div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    );
}

export default Home;