import React, { Component } from 'react';
import Layout from '../../component/Layout';
import DetailSpeakerContent from '../../part/DetailSpeakerContent';

class DetailSpeaker extends Component {
    pathname = window.location.pathname;
    state = {
        email: '',
        password: '',
    }


    componentDidMount() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData != undefined) {
            this.setState({
                email: userData.email,
                password: userData.password,
            })
        }
    }
  render() {
    return (
        < Layout address={this.pathname} data={this.state} >
            < DetailSpeakerContent />
        </Layout>
    );
  }
}

export default DetailSpeaker;