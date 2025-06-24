import React, { Component } from 'react'
import { UserListConsumer } from '../context/ContextUserList'
import { PostListConsumer } from '../context/ContextPostList'


class ContextExampleClassComponent extends Component {
    render() {
        return (
            <>
                <h3>This is an example of how to use multiple context in single Class Component</h3>
                <UserListConsumer>
                    {(userList) => {
                        return (<PostListConsumer>
                            {(postList) => {
                                return (
                                    <>
                                        <p>User list length: {userList?.length}</p>
                                        <p>first user name: {userList[0]?.name}</p>
                                        <p>Post list length: {postList?.length}</p>
                                        <p>first post title: {postList[0]?.title}</p>
                                    </>
                                )
                            }}</PostListConsumer>)
                    }}
                </UserListConsumer>
            </>
        )
    }
}

export default ContextExampleClassComponent 