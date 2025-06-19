import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseEffectToFetchDataByIdFunctionalComponent() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(0)


    useEffect(() => {
        if (id) {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
                .then((res) => { console.log(res); setPost(res?.data) })
                .catch((err) => { console.log(err); })
        }
    }, [id])

    return (
        <>
            <h3>This is an Example of fetching data by id from api using useEffect in Functional Component.</h3>
            <input type="text" name='id' value={id} onChange={(e) => { setId(e.target.value) }} />
            <li key={post.id}> {post?.title}</li>
        </>
    )
}

export default UseEffectToFetchDataByIdFunctionalComponent