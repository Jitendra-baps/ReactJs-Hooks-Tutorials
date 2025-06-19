import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseEffectToFetchDataOnClickFunctionalComponent() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idToCallApiCall, setIdToCallApiCall] = useState(1)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + idToCallApiCall)
            .then((res) => { console.log(res?.data); setPost(res?.data) })
            .catch((err) => { console.log(err); })
    }, [idToCallApiCall])
    return (
        <>
            <h3>This is an Example of fetching data on click from api using useEffect in Functional Component.</h3>
            <input type="text" name='id' value={id} onChange={(e) => { setId(e.target.value) }} />
            <button onClick={() => { setIdToCallApiCall(id) }}>Fetch Data</button>
            <li key={post.id}>Id: {post.id} <br></br>Title: {post.title}</li>
        </>
    )
}

export default UseEffectToFetchDataOnClickFunctionalComponent