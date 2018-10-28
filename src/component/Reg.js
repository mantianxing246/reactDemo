import React from 'react'
import getCookie from '../js/cookie'

class Reg extends React.Component{
    state={
        msg:""
    }

    render(){
        return (
            <div className="sign-up segments-page" style={{width:"100%",position:"absolute"}}>
                <div className="container">
                    <div className="signup-contents">
                        <div className="pages-title">
                            <h3>Sign Up</h3>
                        </div>
                        <div>
                                <input type="text" placeholder="Username" id='name'/>
                                        <input type="password" placeholder="password" id='password'/>
                                            <input type="password" placeholder="Retype Password" id='passwordSure'/>
                                                <button className="button" onClick={this.regClick.bind(this)}>
                                                    <i className="fa fa-send"></i>Sign Up
                                                </button>
                        </div>
                        <div className="social-login">
                            <p>{this.state.msg}</p>
                            <h5>Sign Up with</h5>
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
    regClick(){
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
        if(document.getElementById("password").value!=document.getElementById("passwordSure").value){
            this.setState({
                msg:"2次密码输入的不对"
            })
        }
        var use=getCookie("use");

        var obj={
            name:document.getElementById("name").value,
            password:document.getElementById("password").value
        }
        for(var i=0;i<use.length;i++){
            if(use[i].name===document.getElementById("name").value){
                this.setState({
                    msg:"用户名已经注册"
                })
                break;
            }
        }
        if(i>=use.length){
            use.push(obj);
        }
        document.cookie='use='+JSON.stringify(use);
        this.props.history.replace("/login");
    }
}

export default Reg