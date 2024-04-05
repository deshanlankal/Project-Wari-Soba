import React, { useRef } from "react";
import vidiologin from './assets/video.mp4';
import './login.css';

const Login = () => {
    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current.play();
    };
    return (
        <div className="main">
            <div className="overlay"></div>
            <video className="video" src={vidiologin} autoPlay loop muted />
            <div className="content">
                <h1>Welcome To </h1>
                <p>the Irrigation Department Open system</p>
            </div>
        </div>
    )
}

export default Login;
