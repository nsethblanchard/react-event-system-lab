// Code EyesOnMe Component Here

import React, { Component } from 'react'

export class EyesOnMe extends Component {

    focused = () => {
        console.log('Good!')
    }

    blurred = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
           <button
           onFocus={this.focused}
           onBlur={this.blurred}
           >


           </button>
        )
    }
}

export default EyesOnMe
