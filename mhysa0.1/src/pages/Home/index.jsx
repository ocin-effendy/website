import React, { Component } from 'react'
import Hero from '../../component/Hero';
import Layout from '../../component/Layout';
import OurSpeakers from '../../part/OurSpeakers';
import Patners from '../../part/Partners';
import PopularClass from '../../part/PopularClass';
import Testimoni from '../../part/Testimoni';


class Home extends Component {
    pathname = window.location.pathname
    
    render() {
        return (
            <Layout address={this.pathname}>
                <Hero/>
                <Patners />
                <PopularClass />
                < OurSpeakers />
                < Testimoni />
            </Layout>
        )
    }
}

export default Home;
