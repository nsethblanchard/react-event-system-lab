// Code Keypad Component Here
import React, { Component } from 'react'

export class Keypad extends Component {

    selectedPhrase = () => {
        console.log('Entering password...')
    }


    render() {
        return (
            <input type="password" onKeyUp={this.selectedPhrase}/>
        )
    }
}

export default Keypad
