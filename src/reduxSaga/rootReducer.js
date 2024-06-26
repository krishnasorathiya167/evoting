import { combineReducers } from "redux";
import adminReducer from "./admin/reducer";
import userReducer from "./user/reducer";


let rootReducer = combineReducers({
    adminReducer,
    userReducer,
})

export default rootReducer;