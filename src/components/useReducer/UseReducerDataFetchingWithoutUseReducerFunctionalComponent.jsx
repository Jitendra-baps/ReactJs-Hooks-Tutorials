import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseReducerDataFetchingWithoutUseReducerFunctionalComponent() {
    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                setLoading(false)
                setPost(res?.data)
                setError('')
            })
            .catch((error) => {
                setLoading(false)
                setPost({})
                setError('Something went wrong')
                console.log(error);
            })
    }, [])
    return (
        <>
            <h3>This is an example of how to data fetch using useState and useEffect in Functional Component</h3>
            {loading ? <h4>...Loading</h4> : <li>{post.title}</li>}
            {error ? error : null}
        </>
    )
}

export default UseReducerDataFetchingWithoutUseReducerFunctionalComponent