import { ADD_DISH, REMOVE_DISH, CLEAR_CART } from "./types";

// ADD DISH
export const addDish = (dish) => {
    return {
        type: ADD_DISH,
        payload: { dish }
    }
}

// REMOVE DISH
export const removeDish = (dish) => {
    return {
        type: REMOVE_DISH,
        payload: { dish }
    }
}

// CLEAR CART
export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}
