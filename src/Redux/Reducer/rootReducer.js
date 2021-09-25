import { combineReducers } from "redux";
import ToDoListReducer from './ToDoListReducer';
import CommentAppReducer from "./CommentAppReducer";
import GameBauCuaReducer from "./GameBauCuaReducer";
export const rootReducer = combineReducers({
    ToDoListReducer,
    CommentAppReducer,
    GameBauCuaReducer
});
