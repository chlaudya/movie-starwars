import axios from "axios";
import { GETPEOPLE_ALL } from "../actions/types";
const baseUrl = "https://swapi.dev/api";

export const fetchData = (data) => {
  return {
    type: GETPEOPLE_ALL,
    data,
  };
};

export const fetchAllPeople = () => {
  return (dispatch) => {
    return axios
      .get(`${baseUrl}/people/`)
      .then((response) => {
        dispatch(fetchData(response.data.results));
        console.log("ini response", response);
      })
      .catch((error) => {
        throw error;
      });
  };
};
