import { combineReducers } from "redux";
import { itemsReducer } from "./items/itemsReducer";

export const rootReducer = combineReducers({
  auth: itemsReducer,
});
