import React, { Component } from 'react'
import axios from 'axios'

export default class Conversor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            moeda1Valor: '',
            moeda2Valor: 0,
        }
        this.converter = this.converter.bind(this)
    }

    converter = () => {
        let url = `https://economia.awesomeapi.com.br/all/${this.props.moeda1}-${this.props.moeda2}`;

        axios.get(url)
            .then((response) => {
                let cotacao = (parseFloat(response.data.USD.high) * this.state.moeda1Valor).toFixed(2)

                this.setState({ moeda2Valor: cotacao })
            })
            .catch((error) => {
                console.warn(error)
            }
            )

    }

    render() {
        return (
            <div className='conversor'>
                <h2>{this.props.moeda1} para {this.props.moeda2}</h2>
                <input type="text" onChange={(event) => { this.setState({ moeda1Valor: event.target.value }) }}></input>
                <input type="button" value="converter" onClick={this.converter}></input>
                <h2>{this.state.moeda2Valor}</h2>
            </div>
        )
    }

}

