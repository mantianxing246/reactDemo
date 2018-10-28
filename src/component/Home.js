import React,{Component} from 'react'
import Slider from './Slider'
import Lazyload from 'react-lazyload';

class Home extends Component {

    render() {
        return (
            <div style={{width:"100%",position:"absolute"}}>
                <div className="container">
                    <div className='slide'>
                        <div className="slide-show owl-theme">
                            <Slider speed={1200} auto={true}>
                                <div className="slide-content first-slide">
                                    <div className="mask2"></div>
                                    <img src="/images/slider1.jpg" alt=""/>
                                    <div className="caption">
                                        <h2>Welcome to Jazy</h2>
                                        <p>Mobile Template</p>
                                        <button className="button">Contact Us</button>
                                    </div>
                                </div>
                                <div className="slide-content second-slide">
                                    <div className="mask2"></div>
                                    <img src="/images/slider3.jpg" alt=""/>
                                    <div className="caption">
                                        <h2>New Fashion Style</h2>
                                        <p>Mobile Template</p>
                                        <button className="button">Shop Now</button>
                                    </div>
                                </div>
                                <div className="slide-content third-slide">
                                    <div className="mask2"></div>
                                    <img src="/images/slider2.jpg" alt=""/>
                                    <div className="caption">
                                        <h2>Comfortable Shoes</h2>
                                        <p>Mobile Template</p>
                                        <button className="button">Shop Now</button>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                {/*!-- category --*/}
                <div className="category segments">
                    <div className="container">
                        <div className="row">
                            <div className="col s3">
                                <div className="content">
                                    <a href="javascript:;">
                                        <i className="fa fa-car"></i>
                                        <span>Automotive</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col s3">
                                <div className="content">
                                    <a href="javascript:;">
                                        <i className="fa fa-cutlery"></i>
                                        <span>Food</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col s3">
                                <div className="content">
                                    <a href="javascript:;">
                                        <i className="fa fa-camera-retro"></i>
                                        <span>Camera</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col s3">
                                <div className="content">
                                    <a href="javascript:;">
                                        <i className="fa fa-futbol-o"></i>
                                        <span>sport</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s3">
                                <div className="content">
                                    <a href="javascript:;">
                                        <i className="fa fa-female"></i>
                                        <span>Fashion</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col s3">
                                <div className="content">
                                    <a href="javascript:;">
                                        <i className="fa fa-cubes"></i>
                                        <span>Toy</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col s3">
                                <div className="content">
                                    <a href="javascript:;">
                                        <i className="fa fa-plug"></i>
                                        <span>Electronic</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col s3">
                                <div className="content">
                                    <a href="javascript:;">
                                        <i className="fa fa-lemon-o"></i>
                                        <span>Fruit</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*!-- end category --*/}

                {/*!-- b-seller --*/}
                <div className="b-seller segments">
                    <div className="container">
                        <div className="section-title">
                            <h3>Best Seller</h3>
                        </div>
                        <div className="row">
                            <div className="col s6">
                                <div className="content">
                                    <div className="image">
                                        <Lazyload throttle={200} height={300}>
                                            <img src="../images/product2.jpg" alt=""/>
                                        </Lazyload>
                                    </div>
                                    <div className="text">
                                        <a href="javascript:;">
                                            <p>Trendy Headband Style in 2018</p>
                                        </a>
                                        <h5>$11</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col s6">
                                <div className="content">
                                    <div className="image">
                                        <Lazyload throttle={200} height={300}>
                                            <img src="../images/product3.jpg" alt=""/>
                                        </Lazyload>
                                    </div>
                                    <div className="text">
                                        <a href="javascript:;">
                                            <p>Shoes that Light up When Dark</p>
                                        </a>
                                        <h5>$32</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s6">
                                <div className="content">
                                    <div className="image">
                                        <img src="../images/product4.jpg" alt=""/>
                                    </div>
                                    <div className="text">
                                        <a href="javascript:;">
                                            <p>Casual Shoes that are Comfortable</p>
                                        </a>
                                        <h5>$19</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col s6">
                                <div className="content">
                                    <div className="image">
                                        <Lazyload throttle={200} height={300}>
                                            <img src="../images/product1.jpg" alt=""/>
                                        </Lazyload>
                                    </div>
                                    <div className="text">
                                        <a href="javascript:;">
                                            <p>Casual Clothes in a Modern Style</p>
                                        </a>
                                        <h5>$28</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*!-- end b-seller --*/}

                {/*!-- banner --*/}
                <div className="banner">
                    <div className="container-fluid">
                        <div className="content">
                            <a href="javascript:;">
                                <img src="../images/banner.png" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
                {/*!-- end banner --*/}

                {/*!-- product home --*/}
                <div className="product-home segments">
                    <div className="container">
                        <div className="section-title">
                            <h3>Change Your Style</h3>
                        </div>
                        <div className="owl-theme">

                            <Slider speed={0} auto={true}>
                                <div className="content">
                                    <a href="javascript:;">
                                        <Lazyload throttle={200} height={300}>
                                            <img src="../images/style1.jpg" alt=""/>
                                        </Lazyload>
                                    </a>
                                </div>
                                <div className="content">
                                    <a href="javascript:;">
                                        <Lazyload throttle={200} height={300}>
                                            <img src="../images/style3.jpg" alt=""
                                                                />
                                        </Lazyload></a>
                                </div>
                                <div className="content">
                                    <a href="javascript:;">
                                        <Lazyload throttle={200} height={300}>
                                            <img src="../images/style2.jpg" alt=""
                                                                />
                                        </Lazyload></a>
                                </div>
                                <div className="content">
                                    <a href="javascript:;">
                                        <Lazyload throttle={200} height={300}>
                                            <img src="../images/style4.jpg" alt=""
                                                                />
                                        </Lazyload></a>
                                </div>
                            </Slider>

                        </div>
                        <div className="l-more">
                            <a href="javascript:;">
                                See More<i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/*!-- end product home --*/}

                {/*!-- product home --*/}
                <div className="product-home p-bottom segments">
                    <div className="container">
                        <div className="section-title">
                            <h3>The Best Accessories</h3>
                        </div>
                        <div className=" owl-theme">

                            <Slider speed={0} auto={true}>
                                <div className="content">
                                    <a href="javascript:;">
                                        <Lazyload throttle={200} height={300}>
                                            <img src="../images/accessories2.jpg" alt=""/>
                                        </Lazyload></a>
                                </div>
                                <div className="content">
                                    <a href="javascript:;">
                                        <Lazyload throttle={200} height={300}>
                                            <img src="../images/accessories1.jpg" alt=""/>
                                        </Lazyload></a>
                                </div>
                                <div className="content">
                                    <a href="javascript:;">
                                        <Lazyload throttle={200} height={300}>
                                            <img src="../images/accessories3.jpg" alt=""/>
                                        </Lazyload></a>
                                </div>
                                <div className="content">
                                    <a href="javascript:;">
                                        <Lazyload throttle={200} height={300}>
                                            <img src="../images/accessories4.jpg" alt=""/>
                                        </Lazyload></a>
                                </div>
                            </Slider>

                        </div>
                        <div className="l-more">
                            <a href="javascript:;">
                                See More<i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/*!-- end product home --*/}

                {/*!-- footer --*/}
                <footer>
                    <div className="container">
                        <a href="javascript:;"><h1>JAZY</h1></a>
                        <ul>
                            <li><a href="javascript:;"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="javascript:;"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="javascript:;"><i className="fa fa-google"></i></a></li>
                            <li><a href="javascript:;"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                        <p>Copyright © All Right <a href="javascript:;">Reserved</a></p>
                    </div>
                </footer>
                {/*!-- end footer --*/}
            </div>
        )
    }

    click() {
        console.log(1);
    }
}

export default Home;