import React, { Component } from 'react'
import dataCard from '../../JSON/home.json';
import Hero from '../../component/Hero';
import Layout from '../../component/Layout';
import OurSpeakers from '../../part/OurSpeakers';
import Patners from '../../part/Partners';
import PopularClass from '../../part/PopularClass';
import Testimoni from '../../part/Testimoni';
import Impress from '../../part/Impress';


class Home extends Component {
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
                <Hero/>
                <Patners />
                <PopularClass data={dataCard} email={this.state.email} />
                <OurSpeakers data={dataCard}  />
                <Testimoni data={dataCard.testimoni} />
                <Impress />
            </Layout>
        )
    }
}

export default Home;
