import React, { Component } from "react";
import Layout from "../../component/Layout";
import MhysaClassContent from "../../part/MhysaClassContent";
import dataAllCard from "../../JSON/allCard.json";
import Modal from "../../component/Modal";
import { connect } from "react-redux";

class MhysaClass extends Component {
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
    const countData = dataAllCard.allClass.length;
    const lastNumber = Math.ceil(countData / 9);
    console.log("ini alamat mhysa ga : " + this.pathname);
    console.log('ini isi modal redux : ' + this.props.modal);
    return (

        <Layout address={this.pathname} data={this.state}>
          < Modal status={this.props.modal} address={this.pathname} />
          <MhysaClassContent data={dataAllCard} lastNumber={lastNumber} email={this.state.email} />
        </Layout>
    
    );
  }
}

const stateRedux = (state) => ({
  modal: state.statusModal
});



export default connect(stateRedux, null)(MhysaClass);
