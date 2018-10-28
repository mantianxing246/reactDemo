import React from 'react'

class BlogSingle extends React.Component{
    render(){
        return(
            <div className="blog-single segments-page">
                <div className="container">
                    <div className="contents">
                        <img src="images/blog-single.jpg" alt=""/>
                            <div className="text">
                                <h4>Three Women are Shopping</h4>
                                <p className="date"><i className="fa fa-calendar"></i>January 01 2018</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim odit quaerat
                                    distinctio perspiciatis dignissimos assumenda. Ab cum, vero voluptas quos!
                                    Dignissimos sequi explicabo nulla in quas nihil, quos sapiente tenetur.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate temporibus at
                                    laborum tempora repellat magnam eligendi corporis cumque quasi cum, accusantium et!
                                    Expedita at, recusandae porro. A ratione, iste accusamus.</p>
                            </div>
                    </div>
                    <div className="share-button">
                        <ul>
                            <li><a href=""><i className="fa fa-facebook"></i></a></li>
                            <li><a href=""><i className="fa fa-twitter"></i></a></li>
                            <li><a href=""><i className="fa fa-google"></i></a></li>
                        </ul>
                    </div>
                    <div className="comment-form">
                        <h4>Leave Your Reply</h4>
                        <form>
                            <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                                    <textarea cols="30" rows="10" placeholder="Message"></textarea>
                                    <button className="button"><i className="fa fa-send"></i>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogSingle;