import React from 'react'
import Slider from "./Slider";
import {connect} from 'react-redux'
import types from '../store/types'

class Theme extends React.Component{

    render(){
        let {viewTheme}=this.props
        return(
            <div>
                <Slider speed={0} auto={false}>
                    <div style={{height:document.querySelector("html").clientHeight+"px"}}>
                        <img src="/images/sli1.png" alt="" style={{width:"100%",height:"100%"}}/>
                    </div>
                    <div style={{height:document.querySelector("html").clientHeight+"px"}}>
                        <img src="http://img2.ali213.net/picfile/News/2015/05/19/584_2015051911702860.jpg" alt=""
                             style={{width:"100%",height:"100%"}}/>
                    </div>
                    <div style={{height:document.querySelector("html").clientHeight+"px"}}>
                        <img src="http://img4.imgtn.bdimg.com/it/u=1159528149,548165551&fm=200&gp=0.jpg"
                             style={{width:"100%",height:"100%"}}/>
                        <input type="button" defaultValue={'进入页面'} style={{
                            backgroundColor:'blue',
                            width:"80px",
                            height:"40px",
                            color:"white",
                            border:"none",
                            position:"absolute",
                            left:"50%",
                            bottom:"10%",
                            marginLeft:"-40px",
                        }} onClick={
                            ()=>{
                                viewTheme(false);
                            }
                        }/>
                    </div>
                </Slider>
            </div>
        )
    }
}

let stateToProps=(state,props)=>{
    return{

    }
}

let reducerDispath=(dispath,props)=>{
    return{
        viewTheme(paload){
            dispath({
                type:types.THEME,
                payload:false
            })
        }
    }
}

export default connect(
    stateToProps,
    reducerDispath
)(Theme);