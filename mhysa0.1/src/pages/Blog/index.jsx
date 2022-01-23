import React, { Component } from 'react';
import Layout from '../../component/Layout';


class Blog extends Component {
    pathname = window.location.pathname;
    
    render() {
        console.log("ini alamaatnya cok : " + this.pathname)
        return (
            <Layout address={this.pathname}>
                <h1>Ini adalah halaman blog</h1>
            </Layout>
        )
    }
}

export default Blog;
