import React, { useEffect, useState } from "react";
import LoginPage from "../LoginPage/LoginPage";

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState();
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (token && userId) {
        fetch(`https://60dff0ba6b689e001788c858.mockapi.io/users/${userId}`, {
            method: 'GET',
            headers: {
                Authorization: token,
            }
        })
        .then(function (response) {
            console.log("response= ",response);
            return response.json();
        })
        .then(function (json) {
            setUserInfo(json);
            console.log(json);
        });
    }
    
    }, [token,userId])

    return token  ? (
        <div>
            Name: {userInfo?.name} <br></br>
            User Id: {userInfo?.id}
        </div>
    ) : (
        <div>
            <b>You need to login to continue</b>
            <LoginPage/>
        </div>
    );
}


export default ProfilePage;