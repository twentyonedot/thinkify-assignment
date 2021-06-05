import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticlesData } from "./Redux/actions/articlesDataAction";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const articlesData = useSelector(
    (state) => state.articlesDataReducer.articlesData
  );
  useEffect(() => {
    dispatch(fetchArticlesData());
  }, []);
  console.log(articlesData.data);
  return (
    <div className="App">
      {articlesData &&
        articlesData.data.map((val) => {
          return <p>{val.author}</p>;
        })}
    </div>
  );
}

export default App;
