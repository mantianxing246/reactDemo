import  React from 'react'
import fetchJsonp from 'fetch-jsonp';

class Search extends React.Component{
    //https://www.baidu.com/s?wd=
    state={
        msg:"",
        list:[]
    }
    render(){
        return(
            <div className="sidebar-panel sidebar-search">
                <ul id="slide-out-right" className="collapsible side-nav" style={{width:"100%"}}>
                    <li>
                        <div className="form">
                            <input type="search" id='text' onChange={this.input.bind(this)} value={this.state.msg}/>
                                <button className="button" onClick={
                                    ()=>{
                                        this.props.history.replace("/home");
                                    }
                                }><i className="fa fa-search"></i></button>
                        </div>
                        <div className="clear"></div>
                    </li>
                    {
                        this.state.list.map((item,key)=>{
                            return <li key={key} onClick={
                                ()=>{
                                    this.setState({
                                        msg:item
                                    })
                                }
                            }><a href="javascript:;">{item}</a></li>
                        })
                    }
                </ul>
            </div>
        )
    }
    input(e) {
        this.setState({
            msg:e.target.value
        })

        this.fetchJsonpState.bind(this,e)()
    }
    fetchJsonpState(e){
        var value=e.target.value;
        clearTimeout(this.timer);
        this.timer=setTimeout(()=>{
            fetchJsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+value,{
                jsonpCallback: 'cb',
            }).then(res=>(
                res.json()
            )).then(res=>{
                this.setState({
                    list:res.s
                })
            })
        },500)
    }

}

export default Search