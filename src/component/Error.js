import React from 'react'

function Error() {
    return(
        <div className="segments-page" style={{width:"100%",position:"absolute"}}>
            <div className="container">
                <div className="page-not-found">
                    <h2>404</h2>
                    <h4>Page Not Found</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni, reprehenderit ex et
                        ipsum, eius sunt non praesentium, atque quos dolor amet dolorem nulla. Natus, doloribus officiis
                        ratione</p>
                    <ul>
                        <li><a href=""><i className="fa fa-home"></i>Home</a></li>
                        <li><a href=""><i className="fa fa-envelope"></i>Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Error;