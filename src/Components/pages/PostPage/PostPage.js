import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const PostPage = () => {
    const [posts, setPosts] = useState([]);
    const [IsLoading, setIsLoading] = useState(true);
    const [error, setError] = useState ('');

    useEffect(() => {
        let didCancel = false;
        axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
        .then(response => {
            if(!didCancel) {
            console.log(response);
            setPosts(response.data)
            }
        });
        return () => {
            didCancel = true;
        }
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {posts?.map(pokemon => (
                    <tr keys = {pokemon.id}>
                        <td>{ pokemon.id }</td>
                        <td>{ pokemon.title }</td>
                        <td>
                            <Link to={`/post/${pokemon.id}`}>View Detail</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
                

                {/* <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr> */}
            </table>
        </div>
    );
};

export default PostPage;