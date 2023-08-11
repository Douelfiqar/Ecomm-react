import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/filter_reducer'
import { useProductsContext } from "./product_context";
import { LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, SORT_PRODUCTS, UPDATE_SORT } from "../action";

const InitialState = {
    all_products : [],
    filtred_products : [],
    grid_view: true,
    sort_default: 'lowest-price',
}

const FilterContext = createContext()

export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, InitialState)
    const {products} = useProductsContext()




    const fetchProducts = () => {
        dispatch({type: LOAD_PRODUCTS, payload: products})
    }

    const displayGridView = () => {
        dispatch({type: SET_GRIDVIEW});
    }

    const displayListView = () => {
        dispatch({type: SET_LISTVIEW})
    }

    const updateProduct = (e) => {
        dispatch({type:UPDATE_SORT, payload: e.target.value})
    }

    useEffect(()=>{
       fetchProducts()
    }, [products])

    useEffect(()=>{
        dispatch({type: SORT_PRODUCTS})
    }, [products, state.sort_default])

    return <FilterContext.Provider value={{...state, displayGridView, displayListView, updateProduct}}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}