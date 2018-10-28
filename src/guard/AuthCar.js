import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class AuthCar extends React.Component{
    render(){
        let {component:Component,usename,...rest}=this.props;
        return(
            <Route {...rest} render={(rest)=>{
                if(usename){
                    return <Component {...rest}/>
                }else{
                    return <Redirect to="/login"/>
                }
            }}>
            </Route>
        )
    }
}

let getState=(state)=>{
    return{
        usename:state.name
    }
}
let dispatchState=()=>({

})
export  default connect(
    getState,
    dispatchState
)(AuthCar)