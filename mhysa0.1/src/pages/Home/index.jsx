import React, { Component } from 'react'
import Class from '../../component/Card/Class';
import Hero from '../../component/Hero';
import Layout from '../../component/Layout';
import Patners from '../../part/Partners';
import PopularClass from '../../part/PopularClass';


class Home extends Component {
    pathname = window.location.pathname
    
    render() {
        return (
            <Layout address={this.pathname}>
                <Hero/>
                <Patners />
                <PopularClass />
            </Layout>
        )
    }
}

export default Home;
