import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetailPage = () => {
    // const postId = useParams();
    const { id } = useParams();
    const [data, setData] = useState({});
    useEffect(()=>{
        let didCancel = false;
        axios({
            method: 'GET',
            url: `https://jsonplaceholder.typicode.com/posts/${id}`
        })
        .then(response => {
            if(!didCancel) {
            console.log(response);
            setData(response.data)
            }
        });
        return () => {
            didCancel = true;
        }
    }, [])
      return (
         <div>
             ID: {data?.id} <br></br>
             Title: {data?.title} <br></br>
             Body: {data.body}
         </div>
      )
}

export default PostDetailPage;