import {SIDEBAR_CLOSE, SIDEBAR_OPEN} from '../action'



const products_reducer = (state, action) =>{
    if(action.type === SIDEBAR_OPEN)
        return {...state, isSidebarOpen:true}
    else if(action.type === SIDEBAR_CLOSE)
        return {...state, isSidebarOpen: false}
    return state;
}

export default products_reducer