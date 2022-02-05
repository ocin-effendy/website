import React, { Component } from 'react';
import Layout from '../../component/Layout';
import PaymentClassContent from '../../part/PaymentClassContent';
import dataAllCard from "../../JSON/allCard.json";


class PaymentClass extends Component {
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
        < Layout address={this.pathname} data={this.state}>
            < PaymentClassContent data={dataAllCard.allClass[0]} />
        </Layout>
    );
  }
}

export default PaymentClass;
