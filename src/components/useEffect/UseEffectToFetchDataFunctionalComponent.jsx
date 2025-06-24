import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseEffectToFetchDataFunctionalComponent() {

    const [postList, setPostList] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => { console.log(res); setPostList(res.data) }).catch((err) => { console.log(err); })
    },[])

    return (
        <>
            <h3>This is an Example of fetching data from api using useEffect in Functional Component.</h3>
            {
                postList.map((post) => <li key={post.id}> {post.title} </li>)
            }
        </>
    )
}

export default UseEffectToFetchDataFunctionalComponent