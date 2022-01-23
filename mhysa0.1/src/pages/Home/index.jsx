import React, { Component } from 'react'
import Hero from '../../component/Hero';
import Layout from '../../component/Layout';


class Home extends Component {
    pathname = window.location.pathname
    
    render() {
        return (
            <Layout address={this.pathname}>
                <Hero/>
            </Layout>
        )
    }
}

export default Home;
