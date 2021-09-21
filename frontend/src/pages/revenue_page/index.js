import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import Logo from '../../assets/images/logo.png';
import homeImage from '../../assets/images/menu/Home.png';
import loveImage from '../../assets/images/menu/Love.png';
import categoryImage from '../../assets/images/menu/Category.png';
import settingsImage from '../../assets/images/menu/Settings.png';
import { Link } from 'react-router-dom';


const Revenue = ({ match }) => {
    const [revenues, setRevenues] = useState({});

    useEffect(() => {
        api.get('/revenues/' + match.params.id)
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
                    </nav>
                    <hr></hr>
                </header>
            </section>
            <section className="section-padding revenues">
                <div className="container c-revenues">
                    <p className="title-food title is-3">{revenues.name}</p>
                    <img className="food-image" src={revenues.image} alt={revenues.nome}></img>

                    <div className="ingredient">
                        <p className="subtitle is-5">Ingredientes</p>
                        {revenues.ingredients?.map(i => (
                            <div className="ingredients">
                                <div className="columns c-flex">
                                    <i class="fas fa-dot-circle"></i>
                                    <p>{i.i}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="prepare">
                        <p className="subtitle is-5">Preparo</p>
                        {revenues.preparation?.map((p, index) => (
                            <div className="preparation">
                                <div className="columns c-flex">
                                    <i class="fas fa-dot-circle"></i>
                                    <p>Passo {index + 1}</p>
                                </div>
                                <p className="step">{p.step}</p>
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

export default Revenue;