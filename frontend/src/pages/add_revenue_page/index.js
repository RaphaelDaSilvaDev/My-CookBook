import React, { useState } from "react";

import Logo from '../../assets/images/logo.png';

const AddRevenue = () => {
    const [inputIngredients, setInputsIngredients] = useState([])
    const [inputPrepare, setInputsPrepare] = useState([])

    const addInputIngredients = () => {
        setInputsIngredients([...inputIngredients, setInputsIngredients])
    }
    const addInputPrepare = () => {
        setInputsPrepare([...inputPrepare, setInputsPrepare])
    }
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
            <section className="section-padding form">
                <div className="container">
                    <div className="field">
                        <div className="control">
                            <input class="input" type="text" placeholder="Nome da Receita"></input>
                        </div>
                    </div>
                    <div className="file is-large is-boxed">
                        <label className="file-label">
                            <input className="file-input" type="file" name="resume"></input>
                            <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    Selecione a Imagem
                                </span>
                            </span>
                        </label>
                    </div>
                    <div className="Ingredients">
                        <p className="subtitle is-4">Ingredientes</p>
                        <input class="input" name="ingredientsInput" type="text" placeholder="Ingrediente"></input>
                        {inputIngredients.map(node => <input class="input" name="ingredientsInput" type="text" placeholder="Ingrediente"></input>)}
                        <div class="buttons">
                            <button onClick={addInputIngredients} className="button is-primary">Adicionar Ingredientes</button>
                        </div>
                    </div>
                    <div className="Prepare">
                        <p className="subtitle is-4">Preparo</p>
                        <input class="input" name="prepareInput" type="text" placeholder="Preparo"></input>
                        {inputPrepare.map(node => <input class="input" name="prepareInput" type="text" placeholder="Preparo"></input>)}
                        <div class="buttons">
                            <button onClick={addInputPrepare} className="button is-primary">Adicionar Novo Passo</button>
                        </div>
                    </div>
                    <div className="sendRevenue">
                        <button className="button is-primary">Enviar Receita</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddRevenue;