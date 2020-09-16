import { GETPEOPLE_ALL, SEARCH_BY_TITLE } from "../actions/types";

const initialState = {
  people: [],
  searchStatus: null,
};

const people = (state = initialState, action) => {
  switch (action.type) {
    case GETPEOPLE_ALL:
      return {
        ...state,
        people: action.data,
      };
    case SEARCH_BY_TITLE:
      console.log("ini py", action.payload);
      if (action.payload !== 0) {
        alert("search complete");
        return {
          ...state,
          movies: action.payload,
          searchStatus: action.status,
        };
      } else {
        alert("nothing found");
        return {
          ...state,
        };
      }
    default:
      return state;
  }
};
export default people;
