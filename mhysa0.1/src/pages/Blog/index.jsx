import React, { Component } from 'react';
import Layout from '../../component/Layout';


class Blog extends Component {
    pathname = window.location.pathname;
    state = {
        email: '',
        password: ''
    }

    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData != undefined) {
            this.setState({
                email: userData.email,
                password: userData.password
            })
        }
    }
    
    
    render() {
        return (
            <Layout address={this.pathname} data={this.state}>
                <h1>Ini adalah halaman blog</h1>
            </Layout>
        )
    }
}

export default Blog;
