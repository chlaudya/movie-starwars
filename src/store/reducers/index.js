import { combineReducers } from "redux";
import movies from "./movies";
import people from "./people";

export default combineReducers({
  movies,
  people,
});
