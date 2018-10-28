import React from 'react'

export default function asyncComponent(getAsyncComponent){
    class AsyncComponent extends React.Component{
        constructor(props){
            super(props)
            this.state={
                component:null
            }
        }

        render(){
            let Com=this.state.component
            return Com?<Com {...this.props}/>:null
        }

        async componentDidMount() {
            let {default:Search}=await getAsyncComponent();
            // let Search=await getAsyncComponent();
            this.setState({
                component:Search
            })
        }
    }

    return AsyncComponent;
}
