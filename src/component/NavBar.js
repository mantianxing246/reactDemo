import React from 'react'
import {slide as Menu} from 'react-burger-menu'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import getCookie from "../js/cookie";
import types from "../store/types";
import PreviewImage from '../js/changeHeader'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.contentLeft = this.contentLeft.bind(this);
    }

    state = {
        areMenusOpen: false,
        open:true,
    }

    click() {
        document.querySelector("#product").style = ' display:none';
        document.querySelector("#blog").style = ' display:none';
        this.setState({areMenusOpen: false});
    }

    contentLeft() {
        document.querySelector("#product").style = ' display:none';
        document.querySelector("#blog").style = ' display:none';
        this.setState({areMenusOpen: true});
    }

    showProduct(msg) {
        if(this.state.open){
            document.querySelector('#'+msg).style = ' display:block';
            this.state.open=false;
        }else{
            document.querySelector('#'+msg).style = ' display:none';
            this.state.open=true;
        }
    }

    render() {
        let {usename,setUseName,shopNum}=this.props;
        return (
            <div>
                <div className="navbar">
                    <div className="container">
                        <div className="row">
                            <div className="col s6">
                                <div className="content-left">
                                    <a href="javascript:;" data-activates="slide-out" className="sidebar"
                                       onClick={this.contentLeft.bind(this)}><i
                                        className="fa fa-bars"></i></a>
                                    <a href="javascript:;"><h1>JAZY</h1></a>
                                </div>
                            </div>
                            <div className="col s6">
                                <div className="content-right">
                                    <NavLink href="javascript:;" data-activates="slide-out-right"
                                       className="sidebar-search" to='/search'><i className="fa fa-search"></i></NavLink>
                                    <a href="javascript:;" data-activates="slide-out-cart" className="sidebar-cart">
                                        <i className="fa fa-shopping-cart"></i>
                                        <sup>{shopNum}</sup>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidebar-panel">
                <Menu isOpen={this.state.areMenusOpen}
                      className={'collapsible side-nav'}
                      itemListClassName={'a'} crossClassName={'crossClassName'}
                       width='250px'>
                    <li>
                        <div className="user-view" style={{
                            opacity:"0.9"
                        }}>
                            <div className="background" style={{
                                opacity:"0.2"
                            }}>
                                <img src="/images/bg-user.jpg" alt=""/>
                            </div>
                            <img className="circle responsive-img" src="" alt="" id='imgView'/>
                            <input type="file" name="file1" className="file" id='input' defaultValue=''
                                 onChange={
                                     ()=>{
                                         PreviewImage(document.querySelector("#input"),'imgView','pic_preview')
                                     }
                                 }  />
                            <span className="white-text name">{this.props.usename}&nbsp;</span>
                        </div>
                    </li>
                    <li onClick={this.click.bind(this)}><NavLink to='/home'><i
                        className="fa fa-home"></i>Home</NavLink></li>
                    <li onClick={this.showProduct.bind(this,'product')}>
                        <div className="collapsible-header">
                            <i className="fa fa-female"></i>Product<span><i
                            className="fa fa-angle-right right"></i></span>
                        </div>
                        <div className="collapsible-body" id='product'>
                            <ul>
                                <li onClick={this.click.bind(this)}><NavLink to='/product/productlist'>Product List</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li onClick={this.showProduct.bind(this,'blog')}>
                        <div className="collapsible-header">
                            <i className="fa fa-rss"></i>Blog<span><i
                            className="fa fa-angle-right right"></i></span>
                        </div>
                        <div className="collapsible-body" id='blog'>
                            <ul>
                                <li onClick={this.click.bind(this)}><NavLink to='/blog/blogs'>Blog</NavLink></li>
                                <li onClick={this.click.bind(this)}><NavLink to='/blog/blogsingle'>Blog Single</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li onClick={this.click.bind(this)}><NavLink to='/car'><i className="fa fa-shopping-cart"></i>
                        Shop</NavLink></li>
                    <li onClick={this.click.bind(this)}><NavLink to='/login'><i className="fa fa-sign-in"></i>Sign
                        In</NavLink></li>
                    <li onClick={this.click.bind(this)}><NavLink to='/reg'><i className="fa fa-user-plus"></i>Sign
                        Up</NavLink></li>
                    <li onClick={this.click.bind(this)}><a href="javascript:;" onClick={
                        ()=>{
                            var use=getCookie("use");
                            for(var i=0;i<use.length;i++){
                                if(use[i].name===usename){
                                    use.splice(i,1);
                                    document.cookie='use='+JSON.stringify(use);
                                    setUseName("")
                                    break;
                                }
                            }
                        }
                    }><i className="fa fa-share"></i>Log Out</a></li>
                </Menu>
            </div>
            </div>
        );
    }
}

let getState=(state)=>{
   return{
       usename:state.name,
   }
}
let dispatchState=(dispatch)=>({
    setUseName(name){
        dispatch({type:types.NAME,payload:name})
    }
})

export default connect(
    getState,
    dispatchState
)(NavBar);