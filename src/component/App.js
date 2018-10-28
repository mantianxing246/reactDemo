import React, { Component } from 'react';
import NavBar from "./NavBar";
import Home from './Home'
import Login from "./Login";
import Reg from "./Reg";
import Car from "./Car";
import Error from "./Error";
import {Switch,Route,Redirect} from 'react-router-dom'
import Product from "./Product";
import Blog from "./Blog";
import {connect} from 'react-redux'
import Auth from "../guard/AuthCar";
import Theme from './Theme'
import AsyncComponent from '../common/asyncComponent'
let Search=AsyncComponent(()=>import('./Search'))

class App extends Component {
  render() {
    let {themeView,usename,shopNum}=this.props;

    return (
       <div>
         {themeView==true? <Theme/>:
             <div>
                 <NavBar usename={usename} shopNum={shopNum}/>
                 <Switch>
                     <Route path='/home' component={Home}></Route>
                     <Route path='/reg' component={Reg}></Route>
                     <Route path='/login' component={Login}></Route>
                     <Route path='/blog' component={Blog}></Route>
                     {/*<Route path='/car' component={Car}></Route>*/}
                     <Auth path='/car' component={Car}/>
                     <Route path='/product' component={Product}></Route>
                     <Route path='/search' component={Search}></Route>
                     <Redirect from='/' to='/home' exact></Redirect>
                     <Route component={Error}></Route>
                 </Switch>
             </div>
           }
       </div>
    );
  }
}

let stateToProps=(state,props)=>{
    return{
        themeView:state.theme,
        usename:state.name,
        shopNum:state.shopNum
    }
}
let reducerDispath=()=>({

})

export default connect(
    stateToProps,
    reducerDispath
)(App);
