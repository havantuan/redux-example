import FoodReducer from "./food-reducers";
import UserReducer from "./users-reducers";
import ActiveFoodReducer from "./active-food-reducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    foods: FoodReducer,
    users: UserReducer,
    activefood: ActiveFoodReducer

});
export default allReducers;