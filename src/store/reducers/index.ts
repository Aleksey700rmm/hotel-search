import { combineReducers } from "redux";
import { hotels } from "./hotels";

export const rootReducer = combineReducers({
    hotels,
});

export type RootState = ReturnType<typeof rootReducer>;
