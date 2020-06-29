import { ADD_DISH, REMOVE_DISH, CLEAR_CART } from "./types";

// ADD DISH
export const addDish = (dishName, price) => {
    return {
        type: ADD_DISH,
        payload: { dishName, price }
    }
}

// REMOVE DISH
export const removeDish = (dishName, price) => {
    return {
        type: REMOVE_DISH,
        payload: { dishName, price }
    }
}

// CLEAR CART
export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}
