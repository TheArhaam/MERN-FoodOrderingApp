import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from "../actions/types";

const initialState = {
    dishNames: [],
    totalCost: 0,
};

export default function (state = initialState, action) {
    var totalCost;
    switch (action.type) {
        case ADD_ITEM:
            state.dishNames.push(action.payload.dishName);
            totalCost = state.totalCost + action.payload.price;
            return {
                dishNames: state.dishNames,
                totalCost: totalCost,
            };
        case REMOVE_ITEM:
            var index = state.dishNames.findIndex(action.payload.dishName);
            state.dishNames.splice(index, 1)
            totalCost = state.totalCost - action.payload.price;
            return {
                dishNames: state.dishNames,
                totalCost: totalCost,
            };
        case CLEAR_CART:
            return initialState;
        default:
            return state;
    }
}
