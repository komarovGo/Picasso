import { useEffect, useState } from "react";
import "./style.css";
import { useGetAllPostQuery } from "../Redux/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPost } from "../Redux/slices";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [posts, setPosts] = useState([]);
  const { data } = useGetAllPostQuery();

  useEffect(() => {
    setPosts(data);
  }, [data]);

  const OnClickBtn = (post) => {
   dispatch(
     setPost({
       postId: post.id,
       postBody: post.body,
       postTitle: post.title,
     })
   );
    navigate(`/post`);
  };

  return posts ? (
    <div className="App">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div className="conteiner">
              {post.id}.<span> {post.title} </span>
              {post.body}
            </div>
            <button onClick={() => OnClickBtn(post)}>Просмотр</button>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <h1>загрузка</h1>
  );
}

export default Main;
