import React, { Component } from 'react'
import './styles.css'


const Button = (props) => {
    return (
        <button className="btn-component" onClick={alert('Hello React')}>{props.name}</button>
    )
}

export default class Body extends Component {
    state = {
        values: [],
        opercao: '',
    }
    
    render() {
        return (
            <div className='calculator'>
                <div className='main-calculator'>
                    <p>===</p>
                    <input className='main-input'></input>

                    <div className='buttons'>
                        <Button name="+"/>
                        <Button name="-" />
                        <Button name="x" />
                        <Button name="÷" />
                        <Button name="1" />
                        <Button name="2" />
                        <Button name="3" />
                        <Button name="4" />
                        <Button name="5" />
                        <Button name="6" />
                        <Button name="7" />
                        <Button name="8" />
                        <Button name="9" />
                    </div>
                </div>
            </div>
        )
    }
}

