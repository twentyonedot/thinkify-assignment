import { SET_ARTICLES_DATA } from "../types/types";

const initialState = {
  articlesData: [],
};

export const articlesDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES_DATA:
      return {
        ...state,
        articlesData: action.payload,
      };
    default:
      return state;
  }
};
