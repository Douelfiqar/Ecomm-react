import { ADD_TO_CART, CLEAR_CART, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT } from "../action";

const cart_reducer = (state, action) => {
    if(action.type === ADD_TO_CART){
        const {id, color, amount, product} = action.payload
        
        const tempItem = state.cart.find((item) => item.id === id + color )

        if(tempItem){
            const tempCart = state.cart.map((item)=>{
                if(item.id === id + color){
                    let newAmount = item.amount + amount

                    return item.max < newAmount ? {...item, amount: newAmount} : {...item, amount: item.max}
                }else{
                    return item;
                }
                
            })

            return {...state, cart: tempCart}
        }else{
            const newItem = {

                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.images[0].url,
                price: product.price,
                max: product.stock

            }

            return {...state, cart: [...state.cart, newItem] }

        }
        // return state
    }

    else if(action.type === CLEAR_CART){
        const tempCart = [];
        return {...state, cart: tempCart}
    }else if(action.type === REMOVE_CART_ITEM){
        const tempCart = state.cart.filter((item)=>item.id !== action.payload)
        return {...state, cart: tempCart}
    }else if(action.type === TOGGLE_CART_ITEM_AMOUNT){
        const tempCart = state.cart.map((item)=>{
            if(item.id === action.payload.id){
                const NewAmount = action.payload.value;
                return {...item, amount: NewAmount}
            }
            else{
                return item;
            }
        })
        return {...state, cart: tempCart}
    }

}

export default cart_reducer