import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, SORT_PRODUCTS, UPDATE_SORT } from "../action"


const filter_reducer = (state, action) =>{
    if(action.type === LOAD_PRODUCTS){
        return {...state, all_products: [...action.payload], filtred_products: [...action.payload]}
    }
    else if(action.type === SET_GRIDVIEW){
        return {...state, grid_view:true}
    }
    else if(action.type === SET_LISTVIEW){
        return {...state, grid_view:false}
    }else if(action.type === UPDATE_SORT){
        return {...state, sort_default: action.payload}
    }else if(action.type === SORT_PRODUCTS){
        let sort_product = [...state.all_products]
        if(state.sort_default === "lowest-price"){
            sort_product.sort((a, b)=> a.price - b.price)
            return {...state, filtred_products: sort_product}
        }else if(state.sort_default === "highest-price"){
            sort_product.sort((a, b)=> b.price - a.price)
            return {...state, filtred_products: sort_product}
        }else if(state.sort_default === "name-a"){
            sort_product = sort_product.sort((a, b)=>{
                    return a.name.localeCompare(b.name)
            })
            return {...state, filtred_products: sort_product}
        }else if(state.sort_default === "name-z"){
            sort_product = sort_product.sort((a, b)=>{
                return b.name.localeCompare(a.name)
            })
            return {...state, filtred_products: sort_product}
        }
    }

    return state
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer