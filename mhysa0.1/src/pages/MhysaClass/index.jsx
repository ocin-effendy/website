import React, { Component } from "react";
import Layout from "../../component/Layout";
import MhysaClassContent from "../../part/MhysaClassContent";
import dataAllCard from "../../JSON/allCard.json";

class MhysaClass extends Component {
  pathname = window.location.pathname;

  render() {
    const countData = dataAllCard.allClass.length;
    const lastNumber = Math.ceil(countData / 9);
    return (
      <Layout address={this.pathname}>
        <MhysaClassContent data={dataAllCard} lastNumber={lastNumber} />
      </Layout>
    );
  }
}

export default MhysaClass;
