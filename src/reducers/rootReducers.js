import { combineReducers } from "redux";
// import locale from "./locale";
// import contact from "./contact";
import info from "./info";
import user from "./user";

// contact,
// locale,
// dataUser
export default combineReducers({
    info,
    user
});