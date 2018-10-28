import  React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Blogs from "./Blogs";
import BlogSingle from "./BlogSingle";


class Blog extends React.Component{

    render(){
        return(
            <div style={{width:"100%",position:"absolute"}}>
                <Switch>
                    <Route path={this.props.match.path+'/blogs'} component={Blogs}></Route>
                    <Route path={this.props.match.path+'/blogsingle'} component={BlogSingle}></Route>
                    <Redirect from='/blog' to='/blog/blogs'></Redirect>
                </Switch>
            </div>
        )
    }
}
export default Blog;