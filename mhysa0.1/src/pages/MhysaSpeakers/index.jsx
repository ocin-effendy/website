import React, { Component } from "react";
import Layout from "../../component/Layout";
import MhysaSpeakerContent from "../../part/MhysaSpeakerContent";
import dataAllCard from "../../JSON/allCard.json";

import { connect } from "react-redux";
import Modal from "../../component/Modal";

class MhysaSpeakers extends Component {
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
    const countData = dataAllCard.allSpeaker.length;
    const lastNumber = Math.ceil(countData / 9);
    return (
      <Layout address={this.pathname} data={this.state}>
        < Modal status={this.props.modal} address={this.pathname} />
        < MhysaSpeakerContent data={dataAllCard} lastNumber={lastNumber} email={this.state.email} />
      </Layout>
    );
  }
}

const stateRedux = (state) => ({
  modal: state.statusModal
});


export default connect(stateRedux, null)(MhysaSpeakers);
