import React from 'react'
import {connect} from 'react-redux'
import getProductList from '../store/action'
import types from "../store/types";
import Loading from './Loading'
import Lazyload from 'react-lazyload';


class ProduceList extends React.Component{
    constructor(props){
        super(props);

        props.setProductList();
        this.state= {
            list: []
        }
    }
    render(){
        let {productList,loading,usename}=this.props

        return(
            <div>
                {loading &&<Loading/>}
                <div className="product-list segments-page">
                    <div className="container">
                        {
                            this.state.list.map((item,key)=>{
                                return(
                                    <div className="content no-bb" key={key}>
                                        <div className="product-image">
                                            <Lazyload throttle={200} height={300}>
                                                <img src={'/images/'+item.imgTitle} alt="" onClick={()=>{
                                                    var ali=document.querySelectorAll(".pagination li");
                                                    for(var i=0;i<ali.length;i++){
                                                        if(ali[i].className=='disabled'){
                                                            var keys=i*5+key
                                                        }
                                                    }
                                                    this.props.history.replace("/product/details?id="+keys)
                                                }}/>
                                            </Lazyload>
                                        </div>
                                        <div className="product-text">
                                            <a href=""><p>{item.product}</p></a>
                                            <h5>${item.price}</h5>
                                            <button className="button" onClick={()=>{
                                                if(usename){
                                                    this.props.history.replace("/car")
                                                }else{
                                                    this.props.history.replace("/login")
                                                }
                                            }}>Add to Cart</button>
                                        </div>
                                        <div className="clear"></div>
                                    </div>
                                )
                            })
                        }
                        <div className="pagination">
                            <ul>
                                <li className="disabled"><a href="javascript:;" onClick={this.clickItem.bind(this,0)}>1</a></li>
                                <li onClick={this.clickItem.bind(this,5)}><a href="javascript:;">2</a></li>
                                <li onClick={this.clickItem.bind(this,10)}><a href="javascript:;">3</a></li>
                                <li onClick={this.clickItem.bind(this,15)}><a href="javascript:;">4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
       setTimeout(()=>{
          this.clickItem.bind(this,0)()
       },1000)
    }

    clickItem(item){
        let {productList,loadings}=this.props;
        var arr=[];
        for(var i=item;i<item+5;i++){
            if(i<productList.length){
                arr.push(productList[i]);
            }
        }
        var ali=document.querySelectorAll(".pagination li");
        for(var i=0;i<ali.length;i++){
            ali[i].className='';
        }
        ali[item/5].className='disabled';
        
        this.setState({
            list:arr
        })

        loadings(false)
    }

    componentWillUnmount() {
        let {loadings}=this.props;
        loadings(true)
    }
}

let getstate=(state,props)=>{
    return{
        productList:state.productList,
        loading:state.loading,
        usename:state.name
    }
}
let dispatchState=(dispatch,props)=>{
    return{
        setProductList(){
            getProductList(dispatch)
        },
        loadings(isTure){
            dispatch({
                type:types.LOADING,
                payload:isTure
            })
        }
    }
}

export default connect(
    getstate,
    dispatchState
)(ProduceList);