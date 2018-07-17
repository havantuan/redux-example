import {SELECT_FOOD} from "./actionType"
export const selectFood = (food) => {
    console.log('this.props.food', food);
    return {

        type: SELECT_FOOD,
        payload: food
    }
}