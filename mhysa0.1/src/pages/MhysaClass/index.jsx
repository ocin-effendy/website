import React, { Component } from 'react'
import Nav from '../../component/Nav/index';
import Layout from '../../component/Layout';

class MhysaClass extends Component {
    pathname = window.location.pathname;
    
    render() {
        return (
            <Layout address={this.pathname}>
                <h1>Ini adalah halaman Mhysa Class</h1>
            </Layout>
        )
    }
}

export default MhysaClass;
