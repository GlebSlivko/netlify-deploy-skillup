import axios from "axios";

import { constants } from "./actionsTypes";

export const addNameAC = (name) => ({
  type: constants.ADD_NAME,
  name,
});

export const getDataStarted = () => ({
  type: constants.GET_DATA_STARTED,
});

export const getDataSuccess = (payload) => ({
  type: constants.GET_DATA_SUCCESS,
  payload,
});

export const getDataFailure = (payload) => ({
  type: constants.GET_DATA_FAILURE,
  payload,
});

export const getDataAction =
  (values) => async (dispatch) => {
    dispatch(getDataStarted());
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
      dispatch(getDataSuccess(res.data));
    } catch (error) {
      dispatch(getDataFailure(error));
    }
  };
