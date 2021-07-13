import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="main-footer">
                    <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
                    All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 3.1.0
                    </div>
                </footer>
                {/* Preloader */}
                <div className="preloader flex-column justify-content-center align-items-center">
                    <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
                </div>
            </div>
        )
    }
}
