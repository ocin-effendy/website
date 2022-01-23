import React, { Component } from 'react';
import Layout from '../../component/Layout';


class Contact extends Component {
    pathname = window.location.pathname
    render() {
        return (
            <Layout address={this.pathname}>
                <h1>Ini adalah halaman Contact</h1>
            </Layout>
        )
    }
}

export default Contact;
