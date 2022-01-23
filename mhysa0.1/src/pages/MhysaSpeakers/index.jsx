import React, { Component } from 'react'
import Layout from '../../component/Layout';


class MhysaSpeakers extends Component {
    pathname = window.location.pathname;
    
    render() {
        return (
            <Layout address={this.pathname}>
                <h1>Ini adalah halaman Mhysa Speakers</h1>
            </Layout>
        )
    }
}

export default MhysaSpeakers;
