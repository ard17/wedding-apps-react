import { combineReducers } from "redux";
import categoryReducer from "./category";
import userReducer from "./user";

const rootReducer = combineReducers({
    categoryState : categoryReducer,
    userState : userReducer
})

export default rootReducer;