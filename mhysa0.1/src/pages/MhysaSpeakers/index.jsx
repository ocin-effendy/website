import React, { Component } from 'react'
import Nav from '../../component/Nav/index';

class MhysaSpeakers extends Component {
    pathname = window.location.pathname;
    
    render() {
        return (
            <div>
                <Nav data={this.pathname}/>
                <h1>Ini halaman Speakers</h1>
            </div>
        )
    }
}

export default MhysaSpeakers;
