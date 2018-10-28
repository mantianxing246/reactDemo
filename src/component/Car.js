import React from 'react'
import getCookie from "../js/cookie";
import {connect} from 'react-redux'
import types from '../store/types'

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            total:""
        }
        this.state.list=getCookie("shop");
        this.setNoney=this.setNoney.bind(this);
    }
    render(){
        var shop=getCookie("shop");
        return(
            <div className="segments-page" style={{width:"100%",position:"absolute"}}>
                <div className="container">
                    <div className="pages-title">
                        <h3>Cart</h3>
                    </div>
                    <div className="cart">
                        {
                            this.state.list.map((item,key)=>{
                                return <div className="cart-product first" key={key}>
                                    <div className="row">
                                        <div className="col s4">
                                            <div className="contents">
                                                <img src={"/images/"+item.img} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col s6">
                                            <div className="contents">
                                                <a href="">{item.product}</a>
                                            </div>
                                        </div>
                                        <div className="col s2">
                                            <div className="contents remove">
                                                <a href="javascript:;" onClick={
                                                    ()=>{
                                                        for(var i=0;i<shop.length;i++){
                                                            if(shop[i].product===item.product){
                                                                shop.splice(i,1);
                                                                document.cookie='shop='+JSON.stringify(shop);
                                                                this.setState({
                                                                    list:getCookie("shop")
                                                                })
                                                                setTimeout(()=>{
                                                                    this.setNoney();
                                                                },100)
                                                            }
                                                        }
                                                    }
                                                }><i className="fa fa-remove"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s4">
                                            <div className="contents">
                                                <p>Price</p>
                                            </div>
                                        </div>
                                        <div className="col s8">
                                            <div className="contents">
                                                <p className="price">${item.price}</p>
                                            </div>
                                        </div>
                                        <div className="col s4">
                                            <div className="contents">
                                                <p>Quality</p>
                                            </div>
                                        </div>
                                        <div className="col s6">
                                            <div className="contents">
                                                <input type="number" defaultValue={item.n} id={'number'}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="total-pay">
                        <div className="row">
                            <div className="col s8">
                                <div className="contents">
                                    <p>Casual Clothes in a Modern Style</p>
                                </div>
                            </div>
                            <div className="col s4">
                                <div className="contents right">
                                    <p>$99</p>
                                </div>
                            </div>
                            <div className="col s8">
                                <div className="contents">
                                    <p>Trendy Headband Style in 2018</p>
                                </div>
                            </div>
                            <div className="col s4">
                                <div className="contents right">
                                    <p>$99</p>
                                </div>
                            </div>
                            <div className="col s8">
                                <div className="contents">
                                    <h5>Total</h5>
                                </div>
                            </div>
                            <div className="col s4">
                                <div className="contents right">
                                    <h5>${this.state.total}</h5>
                                </div>
                            </div>
                        </div>
                        <button className="button"><i className="fa fa-send"></i>Proceed to Chekcout</button>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.setNoney();
    }

    setNoney(){
        let {shopNum}=this.props
        var aPrice=document.querySelectorAll(".price");
        var aNum=document.querySelectorAll("#number");

        var sum=0;
        for(var i=0;i<aPrice.length;i++){
            sum+=aPrice[i].innerHTML.split("$")[1]*aNum[i].value;
        }
        this.setState({
            total:sum
        })

        shopNum(aPrice.length);
    }
}

let getState=()=>({

})
let dispatchState=(dispatch)=>({
    shopNum(n){
        dispatch({type:types.SHOPNUM,payload:n})
    }
})

export default connect(
    getState,
    dispatchState
)(Car);