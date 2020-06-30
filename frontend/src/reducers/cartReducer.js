import { ADD_DISH, REMOVE_DISH, CLEAR_CART } from "../actions/types";

const initialState = {
    dishes: [],
    totalCost: 0,
    dishCount: 0,
};

// FOR DEALING WITH THE CART STATE
export default function (state = initialState, action) {
    var totalCost;
    var dishCount;
    switch (action.type) {
        case ADD_DISH:
            state.dishes.push(action.payload.dish);
            totalCost = state.totalCost + action.payload.dish.price;
            dishCount = state.dishCount + 1;
            return {
                dishes: state.dishes,
                totalCost: totalCost,
                dishCount: dishCount
            };
        case REMOVE_DISH:
            var index = state.dishes.findIndex((dish) => dish.dishName === action.payload.dish.dishName);
            state.dishes.splice(index, 1)
            totalCost = state.totalCost - action.payload.dish.price;
            dishCount = state.dishCount - 1;
            return {
                dishes: state.dishes,
                totalCost: totalCost,
                dishCount: dishCount
            };
        case CLEAR_CART:
            return {
                dishes: [],
                totalCost: 0,
                dishCount: 0
            };
        default:
            return state;
    }
}
