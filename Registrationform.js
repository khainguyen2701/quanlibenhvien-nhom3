import React, { Component } from 'react'
import './Registrationform.css';
import Fromchildren from './Children/Fromchildren';
export default class Registrationform extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="all-boder">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xm-6">
                                <div className="panel panel-primary">
                                    <div className="panel-title">
                                        <h2>Form Đăng ký khám bệnh</h2>
                                    </div>
                                    <Fromchildren />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-sm-6 col-xm-6">
                                <img src="./images/bac_si_9_czlj.jpg" alt="picture" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
