import React, { Component } from 'react'
import Nav from '../../component/Nav';

class Contact extends Component {
    pathname = window.location.pathname
    render() {
        return (
            <div>
                <Nav data={this.pathname}/>
                <h1>Ini halaman contact</h1>
            </div>
        )
    }
}

export default Contact;
