import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postId: null,
  postBody: null,
  postTitle: null, 
};

const PostSlices = createSlice({
  name: "postInfo",
  initialState,
  reducers: {
    setPost(state, action) {
      state.postId = action.payload.postId;
      state.postBody = action.payload.postBody;
      state.postTitle = action.payload.postTitle;
    },
  },
});

export const { setPost } = PostSlices.actions;

export default PostSlices.reducer;
