import { CLEAR_FILTERS, FILTER_PRODUCTS, LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, SORT_PRODUCTS, UPDATE_FILTERS, UPDATE_SORT } from "../action"
import { getUniqueValues } from "../utils/helpers"


const filter_reducer = (state, action) =>{
    if(action.type === LOAD_PRODUCTS){

        let product_price = [...action.payload]
        product_price = product_price.map((product)=> product.price)
        let maxPrice = Math.max(...product_price)
        let minPrice = Math.min(...product_price)        


        return {...state, all_products: [...action.payload], 
                filtred_products: [...action.payload],
                filters: {...state.filters,max_price: maxPrice, min_price:minPrice}
            }
    }
    else if(action.type === SET_GRIDVIEW){
        return {...state, grid_view:true}
    }
    else if(action.type === SET_LISTVIEW){
        return {...state, grid_view:false}
    }else if(action.type === UPDATE_SORT){
        return {...state, sort_default: action.payload}
    }
    
    else if(action.type === SORT_PRODUCTS){
        let sort_product = [...state.filtred_products]
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

    else if(action.type === UPDATE_FILTERS){

        if(action.payload.name === "form"){
            return {...state, filters:{...state.filters, text: action.payload.value}}
        }

        if(action.payload.name === "category"){
            return {...state, filters:{...state.filters, category: action.payload.value}}
        }
        if(action.payload.name === "brand"){
            return {...state, filters:{...state.filters, brand: action.payload.value}}
        }
        if(action.payload.name === "colors"){
            return {...state, filters:{...state.filters, color: action.payload.value}}
        }
        if(action.payload.name === "price"){
            return {...state, filters:{...state.filters, price: action.payload.value}}
        }
        if(action.payload.name === "filter"){
            return {...state, filters:{...state.filters, free_shipping: action.payload.value}}
        }
    }

    else if(action.type === CLEAR_FILTERS){
        return {...state, filters:{
                            text: '',
                            category: 'all',
                            brand: 'all',
                            color: 'all',
                            price: 0,
                            max_price: state.filters.max_price,   
                            min_price: state.filters.min_price,
                            free_shipping: false
    }}
    }

    else if(action.type === FILTER_PRODUCTS){

        let filtredArrayByState = [...state.all_products]
        let allP = [...state.all_products]
       
        if(state.filters.text){
            filtredArrayByState = allP.filter((product)=>{
                return product.name.toLowerCase().startsWith(state.filters.text)
            })

        }



        if(state.filters.category !== "all"){
            filtredArrayByState = filtredArrayByState.filter((product)=> product.category === state.filters.category)
        }

        if(state.filters.brand !== "all"){
            filtredArrayByState = filtredArrayByState.filter((product)=> product.company === state.filters.brand)
        }

        if(state.filters.color !== "all"){
            filtredArrayByState = filtredArrayByState.filter((product) => {return product.colors.find((c)=> c === state.filters.color)})
        }

        if(state.filters.price !== 0){
            filtredArrayByState = filtredArrayByState.filter((product)=> product.price < state.filters.price)
        }

        if(state.filters.free_shipping){
            filtredArrayByState = filtredArrayByState.filter((product)=> product.shipping === true) 
        }

        return {...state, filtred_products: filtredArrayByState}
        
    }

    return state
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer