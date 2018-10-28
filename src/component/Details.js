import React from 'react'
import Slider from "./Slider";
import {connect} from 'react-redux'
import types from "../store/types";
import getProductList from "../store/action";
import getCookie from "../js/cookie";

class Details extends React.Component{
    // 构造
      constructor(props) {
        super(props);
         let {setProductList}=props;
         setProductList();
      }

    render(){
        let {details,usename}=this.props;
        var num=this.props.location.search.split('?')[1].split("=")[1];
        return(
            <div className="segments-page">
                <div className="container">
                    <div className="product-details">
                        <div className="contents">
                            <div className="product-d-slide  owl-theme">
                                <Slider auto={true} speed={1000} >
                                    <div className="content">
                                        {details.length>0 && <img src={"../images/"+details[num].imgTitle} alt=""/>}
                                    </div>
                                    <div className="content">
                                        {details.length>0 && <img src={"../images/"+details[num].imgTitle} alt=""/>}
                                    </div>
                                    <div className="content">
                                        {details.length>0 && <img src={"../images/"+details[num].imgTitle} alt=""/>}
                                    </div>
                                </Slider>
                            </div>
                            <div className="desc-short">
                                {details.length>0 && (<h4>{details[num].product}</h4>)}
                                {details.length>0 && (<h5><p>${details[num].price}</p></h5>)}
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus cum autem illo
                                    libero </p>
                                <button className="button" onClick={()=>{
                                    if(usename){
                                        var shop=getCookie("shop");
                                        var obj={
                                            img:details[num].imgTitle,
                                            product:details[num].product,
                                            price:details[num].price,
                                            n:1
                                        }
                                        for(var i=0;i<shop.length;i++){
                                            if(details[num].product===shop[i].product){
                                                break;
                                            }
                                        }
                                        if(i>=shop.length){
                                            shop.push(obj);
                                        }
                                        document.cookie='shop='+JSON.stringify(shop);

                                        this.props.history.replace("/car")
                                    }else{
                                        this.props.history.replace("/login")
                                    }
                                }}><i className="fa fa-shopping-cart"></i>Add to cart</button>
                            </div>
                            <div className="share-media">
                                <h5>Share</h5>
                                <ul>
                                    <li><a href=""><i className="fa fa-facebook"></i></a></li>
                                    <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                    <li><a href=""><i className="fa fa-google"></i></a></li>
                                </ul>
                            </div>
                            <div className="desc-long">
                                <h5>Description</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quos corrupti odio
                                    totam, repellat in dolorem at minus explicabo optio doloremque, omnis odit ad,
                                    maxime. Aut, totam ea rerum soluta! Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Placeat cum vero veritatis eius autem labore quas facere quasi!
                                    Eos nesciunt, similique quae</p>
                            </div>
                        </div>
                        <div className="review">
                            <h5>Review</h5>
                            <div className="comment-people">
                                <div className="contents">
                                    <div className="icon">
                                        <img src="../images/comment1.png" alt=""/>
                                    </div>
                                    <div className="text">
                                        <h6>John Doe</h6>
                                        <p className="date">January 10, 2018</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="contents reply">
                                    <div className="icon">
                                        <img src="../images/comment2.png" alt=""/>
                                    </div>
                                    <div className="text">
                                        <h6>Jordan <i className="fa fa-bookmark"></i></h6>
                                        <p className="date">January 10, 2018</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment-post">
                            <div className="comment-title">
                                <h5>Leave Your Reply</h5>
                            </div>
                            <form>
                                <input type="text" placeholder="Name"/>
                                    <input type="email" placeholder="Email"/>
                                        <textarea className="no-mb" cols="30" rows="10"
                                                  placeholder="Message"></textarea>
                                        <button className="button">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let {loading}=this.props
        loading();
    }
}

let setState=(state)=>{
    return{
        details:state.productList,
        usename:state.name
    }
}
let dispatchState=(dispatch)=>{
    return{
        loading(){
            dispatch({
                type:types.LOADING,
                payload:false
            })
        },
        setProductList(){
            getProductList(dispatch)
        },
    }
}

export default connect(
    setState,
    dispatchState
)(Details);