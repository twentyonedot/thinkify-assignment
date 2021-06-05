import { SET_ARTICLES_DATA } from "../types/types";

export const fetchArticlesData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://jsonmock.hackerrank.com/api/articles"
      );
      const res = await response.json();
      dispatch({
        type: SET_ARTICLES_DATA,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
