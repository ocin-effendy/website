import React, { Component } from 'react';
import Layout from '../../component/Layout';
import PaymentSpeakerContent from '../../part/PaymentSpeakerContent';
class PaymentSpeaker extends Component {
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
    return(
        < Layout address={this.pathname} data={this.state}>
            < PaymentSpeakerContent />
        </Layout>
    );
  }
}


export default PaymentSpeaker;
