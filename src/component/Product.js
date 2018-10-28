import  React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import ProduceList from "./ProduceList";
import Details from "./Details";

class Product extends React.Component{

    render(){
        return(
           <div style={{width:"100%",position:"absolute"}}>
              <Switch>
                  <Route path='/product/details' component={Details}></Route>
                  <Route path='/product/productlist' component={ProduceList}></Route>
                  <Redirect from='/product' to='/product/productlist'></Redirect>
              </Switch>
           </div>
        )
    }
}
export default Product;