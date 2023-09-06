import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const UserRoute = ({ children }) => {

    const { userInfo } = useSelector((state) => state.userSignIn);
    console.log("userInfo",userInfo)
    return userInfo  ? children : <Navigate to="/" />;
}

export default UserRoute