import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import "./home.css";

import Logo from '../../assets/images/logo.png';
import homeImage from '../../assets/images/menu/Home.png';
import loveImage from '../../assets/images/menu/Love.png';
import categoryImage from '../../assets/images/menu/Category.png';
import settingsImage from '../../assets/images/menu/Settings.png';
import clockImage from '../../assets/images/clock.png';
import bowlImage from '../../assets/images/bowl.png';
import { Link } from 'react-router-dom';


const Home = () => {
    const [revenues, setRevenues] = useState([]);

    useEffect(() => {
        api.get('/revenues')
            .then((response) => setRevenues(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <>
            <section className="section-padding header">
                <header className="container">
                    <nav className="navbar is-shadow" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <a className="navbar-item" href="/">
                                <img src={Logo} alt="My CookBook"></img>
                                <h1 className="subtitle is-3">My</h1>
                                <h1 className="title is-3">CookBook</h1>
                            </a>
                        </div>
                        <div className="navbar-end">
                            <Link to="add-revenue" className="add-revenue">
                                <i class="fas fa-plus"></i>
                            </Link>
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
            <section className="section-padding revenues">
                <div className="container">
                    <div className="columns">
                        {revenues.map(r => (
                            <div className="column is-3 is-mobile">
                                <Link to={"revenue/" + r.id}>
                                    <div className="card" key={r.id}>
                                        <div className="card-content">
                                            <div className="media-content">
                                                <span className={'tag ' + r.tag}>{r.tag}</span>
                                                <p className="title is-5">{r.name}</p>
                                            </div>
                                            <div className="content">
                                                <p className="subtitle is-6"><img src={clockImage}></img>Tempo: {r.time}</p>
                                                <p className="subtitle is-6"><img src={bowlImage}></img>Ingredientes: {r.ingredientsAmount}</p>
                                            </div>
                                        </div>
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <img src={r.image} alt={r.nome}></img>
                                            </figure>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="footer">
                <nav className="navbar is-shadow is-dark" role="navigation" aria-label="main navigation">
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item is-active" to="/">
                                <div className="menu-item">
                                    <img src={homeImage}></img>
                                    <p>Home</p>
                                </div>
                            </Link>
                            <Link className="navbar-item" to="love">
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