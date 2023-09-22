import { Routes, Route } from "react-router-dom";
import Main from "../page/main";
import Post from "../page/post";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}
