import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css"

function Post() {
  const selector = useSelector((state) => state.postInfo)

  console.log(selector);
  return (
    <div className="App">
      <div className="box">
        <h2>{selector.postId}.</h2>
        <h1>{selector.postTitle}</h1>
        <p>{selector.postBody}</p>
      </div>
      <Link to="/">
        <button>Назад</button>
      </Link>
    </div>
  );
}

export default Post;
