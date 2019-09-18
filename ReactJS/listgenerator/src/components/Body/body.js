import React, { Component } from 'react'
import './body.css'

const values = []

export default class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            text: ''
        }
    }

    renderTodos = () => {
        const tmp = values.map((element => {
            return element
        }))
        this.setState({ items: tmp })
    }

    render() {
        const { items, text } = this.state
        return (
            <div className="main">
                <div className="input">
                    <h2>Adicionar a lista</h2>
                    <input onChange={(event) => { this.setState({ text: event.target.value }) }}>
                    </input>

                </div>
                <div className="main-btn">
                    <button onClick={() => {
                        values.push(text);
                        this.renderTodos();
                    }
                    }>Adicionar</button>

                    <button onClick={() => {
                        values.splice(0, values.length);
                        this.renderTodos();
                    }}
                    >Limpar Lista</button>

                </div>

                <div className="main-li">
                    {items.map(element =>
                        <div className="main-li2" key={element}>
                            <li>{element}</li>
                            <button className="main-excluir" onClick={() => {
                                if (values.length == 1) values.splice(0, values.length);
                                values.splice(values.indexOf(element), 1);
                                this.renderTodos();
                            }}>Excluir</button>
                        </div>
                    )}

                </div>

            </div>
        )
    }
}