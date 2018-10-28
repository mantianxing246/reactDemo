import React from 'react'
import getCookie from "../js/cookie";
import {connect} from 'react-redux'
import types from '../store/types'

class Login extends React.Component{
    state={
        msg:""
    }
    render(){
        return (
            <div className="sign-in segments-page" style={{width:"100%",position:"absolute"}}>
                <div className="container">
                    <div className="signin-contents">
                        <div className="pages-title">
                            <h3>登录</h3>
                        </div>
                        <div>
                            <input type="text" placeholder="Username" id='name'/>
                                    <input type="password" placeholder="password" id='password'/>
                                        <button className="button"
                                                onClick={this.loginCheck.bind(this)}><i className="fa fa-send"></i>Sign in</button>
                        </div>
                        <div className="social-login">
                            <p>{this.state.msg}</p>
                            <h5>Sign In with</h5>
                            <div className="row">
                                <div className="col s6">
                                    <button className="button-full button-facebook">Facebook</button>
                                </div>
                                <div className="col s6">
                                    <button className="button-full button-twitter">Twitter</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s6">
                                    <button className="button-full button-linkedin">Linkedin</button>
                                </div>
                                <div className="col s6">
                                    <button className="button-full button-google">Google+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    loginCheck(){
        let {setUseName}=this.props
        if(document.getElementById("name").value.length==0){
            this.setState({
                msg:"用户名不能为空"
            })
            return;
        }
        if(document.getElementById("password").value.length==0){
            this.setState({
                msg:"密码不能为空"
            })
            return;
        }
        var use=getCookie("use");
        for(var i=0;i<use.length;i++){
            if(use[i].name===document.getElementById("name").value&&use[i].password===document.getElementById("password").value){
                setUseName(use[i].name)
                this.props.history.replace("/home");
                break;
            }
        }
        if(i>=use.length){
            this.props.history.replace("/reg");
        }
    }
}

let getState=(state)=>({

})
let dispatchState=(dispatch)=>({
    setUseName(name){
        dispatch({type:types.NAME,payload:name})
    }
})

export default connect(
    getState,
    dispatchState
)(Login)