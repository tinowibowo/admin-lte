import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        return (
            <div>
                <a href="/" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
            </div>
        )
    }
}
