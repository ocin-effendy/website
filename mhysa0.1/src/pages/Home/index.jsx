import React, { Component } from 'react'
import Hero from '../../component/Hero';
import Nav from '../../component/Nav/index';


class Home extends Component {
    pathname = window.location.pathname
    
    render() {
        return (
            <div>
                <Nav data={this.pathname}/>
                <Hero/>
            </div>
        )
    }
}

export default Home;
