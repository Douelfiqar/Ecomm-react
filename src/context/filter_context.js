import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/filter_reducer'
import { useProductsContext } from "./product_context";
import { CLEAR_FILTERS, FILTER_PRODUCTS, LOAD_PRODUCTS, SET_GRIDVIEW, SET_LISTVIEW, SORT_PRODUCTS, UPDATE_FILTERS, UPDATE_SORT } from "../action";

const InitialState = {
    all_products : [],
    filtred_products : [],
    grid_view: true,
    sort_default: 'lowest-price',
    filters:{
        text: '',
        category: 'all',
        brand: 'all',
        color: 'all',
        price: 0,
        max_price: 0,   
        min_price: 0,
        free_shipping: false
    }
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

    const filterInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch({type:UPDATE_FILTERS, payload: {name, value}})
    }

    const filterChecked = (e) => {
        const name = e.target.name;
        const value = e.target.checked;
        dispatch({type:UPDATE_FILTERS, payload: {name, value}})
    }

    const clearFilters = (e) => {
        dispatch({type:CLEAR_FILTERS})
    }

    const updateFilters = (e) => {
        const value = e.target.value;
        const name = e.target.name

        dispatch({type: UPDATE_FILTERS, payload: {value, name}})
    }

    


    useEffect(()=>{
       fetchProducts()
    //    dispatch({type:UPDATE_FILTERS, payload: products})
    }, [products])

    useEffect(()=>{
        dispatch({type: FILTER_PRODUCTS})
    }, [state.filters])

    useEffect(()=>{
        dispatch({type: SORT_PRODUCTS})
    }, [products, state.sort_default])

    return <FilterContext.Provider value={{...state, displayGridView, displayListView, updateProduct, filterInput, updateFilters, clearFilters, filterChecked}}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}