import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data)
            setPosts(response.data)
        })
        .catch(error => console.error(error))
    })

    return(
        <div>
            <h1>App Posts</h1>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(post => (<tr>
                            <td>{ post.title }</td>
                            <td>{ post.body }</td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default PostList;