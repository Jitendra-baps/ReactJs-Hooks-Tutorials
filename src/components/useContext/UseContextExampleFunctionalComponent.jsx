import React, { useContext } from 'react'
import { UserListContext } from '../../context/ContextUserList'
import { PostListContext } from '../../context/ContextPostList'


function UseContextExampleFunctionalComponent() {
    const userList = useContext(UserListContext)
    const postList = useContext(PostListContext)

    return (
        <>
            <h3>This is an example of how to use useContext to provide value from the context in Functional Component</h3>
            <p>User list length: {userList?.length}</p>
            <p>first user name: {userList[0]?.name}</p>
            <p>Post list length: {postList?.length}</p>
            <p>first post title: {postList[0]?.title}</p>
        </>
    )
}

export default UseContextExampleFunctionalComponent