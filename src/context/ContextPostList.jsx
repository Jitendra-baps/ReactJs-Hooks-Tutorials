import React from "react";

const PostListContext = React.createContext()

const PostListProvider = PostListContext.Provider
const PostListConsumer = PostListContext.Consumer

export { PostListContext, PostListProvider, PostListConsumer }
