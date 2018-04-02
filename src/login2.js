/**
 * Created by lenovo on 2018/3/19.
 */
import React, { Component } from 'react';
import './static/css/login3.css'
import {Link } from 'react-router-dom'
class login2 extends Component {
    render() {
        return (
            <div className="backpic" style={{width:"1300px",height:"600px"}}>
            <div className="container">
                <div className="form row">
                    <div className="form-horizontal col-md-offset-3" id="login_form">
                        <h3 className="form-title">LOGIN</h3>
                        <div className="col-md-9">
                            <div className="form-group">
                                <i className="fa fa-user fa-lg"></i>
                                <input className="form-control required" type="text" placeholder="Username" id="username" name="username" autofocus="autofocus" maxlength="20"/>
                            </div>
                            <div className="form-group">
                                <i className="fa fa-lock fa-lg"></i>
                                <input className="form-control required" type="password" placeholder="Password" id="password" name="password" maxlength="17"/>
                            </div>
                            <div className="form-group">
                                <Link className="col-xs-offset-5 col-md-offset-7 form-title" style={{position:"relative",right:"120px",color:"#6950a1" }} to="./regist">REGIST</Link>

                            </div>
                            <div className="form-group col-md-offset-9">
                                <Link to="./">
                                    <button className="btn btn-default pull-right">登录</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default login2;