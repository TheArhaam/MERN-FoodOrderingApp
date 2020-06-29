import { ADD_DISH, REMOVE_DISH, CLEAR_CART } from "../actions/types";

const initialState = {
    dishes: [],
    totalCost: 0,
};

// FOR DEALING WITH THE CART STATE
export default function (state = initialState, action) {
    var totalCost;
    switch (action.type) {
        case ADD_DISH:
            state.dishes.push(action.payload.dish);
            totalCost = state.totalCost + action.payload.dish.price;
            return {
                dishes: state.dishes,
                totalCost: totalCost,
            };
        case REMOVE_DISH:
            var index = state.dishes.findIndex((dish) => dish.dishName === action.payload.dish.dishName);
            state.dishes.splice(index, 1)
            totalCost = state.totalCost - action.payload.dish.price;
            return {
                dishes: state.dishes,
                totalCost: totalCost,
            };
        case CLEAR_CART:
            return initialState;
        default:
            return state;
    }
}
