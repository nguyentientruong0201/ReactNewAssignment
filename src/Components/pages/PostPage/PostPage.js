import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const PostPage = () => {
    const [posts, setPosts] = useState([]);
    // const [IsLoading, setIsLoading] = useState(true);
    // const [error, setError] = useState ('');

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
        // <div>
        //     <table>
        //         <thead>
        //             <tr>
        //                 <th>ID</th>
        //                 <th>Title</th>
        //                 <th>Action</th>
        //             </tr>
        //         </thead>
        //         <tbody>
                // {posts?.map(pokemon => (
                //     <tr keys = {pokemon.id}>
                //         <td>{ pokemon.id }</td>
                //         <td>{ pokemon.title }</td>
                //         <td>
                //             <Link to={`/post/${pokemon.id}`}>View Detail</Link>
                //         </td>
                //     </tr>
                // ))}
        //         </tbody>
        //     </table>
        // </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="">Title</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {posts?.map(pokemon => (
                    <tr keys = {pokemon.id}>
                        <td>{ pokemon.id }</td>
                        <td>{ pokemon.title }</td>
                        <td>
                            <Link to={`/post/${pokemon.id}`}>View Detail</Link>
                        </td>
                    </tr>
                ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default PostPage;