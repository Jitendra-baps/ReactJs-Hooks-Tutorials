import React from 'react'


const UserListContext = React.createContext()

const UserListProvider = UserListContext.Provider
const UserListConsumer = UserListContext.Consumer

export { UserListContext, UserListProvider, UserListConsumer }



