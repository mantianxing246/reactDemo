import types from './types'

function getProductList(dispatch) {
    fetch("http://localhost:3000/data/productList.json")
        .then(res=>
            res.json()
        ).then(res=>{
            dispatch({
                type:types.PRODUCTLIST,
                payload:res
            })
    })
}

export default getProductList
