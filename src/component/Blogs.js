import React from 'react'

class Blogs extends React.Component{
    render(){
        return(
            <div className="blog segments-page">
                <div className="container">
                    <div className="contents">
                        <img src="/images/blog1.jpg" alt=""/>
                            <div className="text">
                                <a href="blog-single.html"><h4>Women With Fabric Strap Accessories</h4></a>
                                <p className="date"><i className="fa fa-calendar"></i>January 01 2018</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolores totam soluta
                                    culpa cupiditate velit</p>
                            </div>
                    </div>
                    <div className="contents">
                        <img src="/images/blog2.jpg" alt=""/>
                            <div className="text">
                                <a href="blog-single.html"><h4>Watches With Modern Designs</h4></a>
                                <p className="date"><i className="fa fa-calendar"></i>January 01 2018</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolores totam soluta
                                    culpa cupiditate velit</p>
                            </div>
                    </div>
                    <div className="contents">
                        <img src="/images/blog3.jpg" alt=""/>
                            <div className="text">
                                <a href="blog-single.html"><h4>Three Women are Shopping</h4></a>
                                <p className="date"><i className="fa fa-calendar"></i>January 01 2018</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolores totam soluta
                                    culpa cupiditate velit</p>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blogs;