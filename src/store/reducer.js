import types from './types'

let reducer=(state,action)=>{
    let {type,payload}=action;

    switch (type){
        case types.THEME:
            return Object.assign({},state,{theme:payload});
        case types.PRODUCTLIST:
            return Object.assign({},state,{productList:payload})
        case types.LOADING:
            return Object.assign({},state,{loading:payload})
        case types.NAME:
            return Object.assign({},state,{name:payload})
        case types.SHOPNUM:
            return Object.assign({},state,{shopNum:payload})
        default:
            return state;
    }

}

export default reducer