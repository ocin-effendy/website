import React, { Component } from 'react';
import Layout from '../../component/Layout';
import Hero from '../../component/Hero';
import TitleAbout from '../../part/TitleAbout';
import dataAbout from '../../JSON/about.json';
import DescAbout from '../../part/DescAbout';
import Patners from '../../part/Partners';


class About extends Component {
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
                < Hero />
                < TitleAbout />
                < DescAbout data={dataAbout} />
                < Patners />
            </Layout>
        )
    }
}

export default About;
