import axios from "axios";
import { GETMOVIES_ALL, SEARCH_BY_TITLE } from "../actions/types";
const baseUrl = "https://swapi.dev/api";

export const fetchData = (data) => {
  return {
    type: GETMOVIES_ALL,
    data,
  };
};

export const fetchAllMovies = () => {
  return (dispatch) => {
    return axios
      .get(`${baseUrl}/films/`)
      .then((response) => {
        dispatch(fetchData(response.data.results));
        console.log("ini response", response);
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const searchMovie = (data) => async (dispatch) => {
  console.log("search run");
  try {
    const res = await axios({
      method: "GET",
      url: `${baseUrl}/movie/show/search?movie=${data}`,
    });
    console.log(res.data);
    if (res.status === 200) {
      dispatch({
        type: SEARCH_BY_TITLE,
        payload: res.data.data,
        status: data,
      });
    }
  } catch (error) {
    console.log("search movies failed");
  }
};
