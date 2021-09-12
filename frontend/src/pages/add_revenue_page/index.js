import React from "react";

import Logo from '../../assets/images/logo.png';

const AddRevenue = () => {
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
        </>
    )
}

export default AddRevenue;