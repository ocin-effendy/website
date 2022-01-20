import React, { Component } from 'react'
import Nav from '../../component/Nav/index';

class Blog extends Component {
    pathname = window.location.pathname;
    
    render() {
        console.log("ini alamaatnya cok : " + this.pathname)
        return (
            <div>
                <Nav data={this.pathname}/>
                <h1>Ini halaman Blog</h1>
            </div>
        )
    }
}

export default Blog;
