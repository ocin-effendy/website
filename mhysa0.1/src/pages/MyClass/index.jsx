import React, { Component } from 'react';
import Layout from '../../component/Layout';
import MyClassContent from '../../part/MyClassContent';


class MyClass extends Component {
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
      <div className="md:h-screen md:overflow-hidden">
        <Layout address={this.pathname} data={this.state}>
          <MyClassContent email={this.state.email} pathName={this.pathname} />
        </Layout>

      </div>

    )
  }
}

export default MyClass;
