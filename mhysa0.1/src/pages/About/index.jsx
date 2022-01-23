import React, { Component } from 'react';
import Layout from '../../component/Layout';


class About extends Component {
    pathname = window.location.pathname
    render() {
        return (
            <Layout address={this.pathname}>
                <h1>Ini adalah halaman About</h1>
            </Layout>
        )
    }
}

export default About;
