import { constants } from "./actionsTypes";

const initialState = {
  items: [],
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) { 
      
      case constants.GET_DATA_SUCCESS:
      return { ...state, items: action.payload };

    default:
      return state;
  }
};
