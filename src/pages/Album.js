import React from 'react';
import { Link } from 'react-router-dom';

import Header from "../components/Header";
import './Album.css';

function AlbumPage() {
    return (
    <>
    <div className="culoare">
        <Header />
        <div className="heading">
        <h1 className="titlu-album">Recent Work</h1>
        </div>

    <div className="container">
        <div className="album1">
            <Link to="/album/evenimente"><img className="poza-album1 cursor demo" src="https://georgesandu.ro/wp-content/uploads/2023/02/Andreea-Alexandru-795-of-1813-scaled.jpg" alt="ceva" /></Link>
            <div className="text">Sedinta Foto</div>
        </div>
        <div className="album2">
            <Link to="/album/sedinta"><img className="poza-album2 cursor demo" src="https://images.squarespace-cdn.com/content/v1/63052619b0f81122751533e9/1668105123966-OR5DVVRV4LY6IV9IYNL7/couples-photography-afp-27.jpg" alt="ceva" /></Link>
            <div className="text2">Evenimente</div>
        </div>
        <div className="album3">
            <Link to="/album/diverse"><img className="poza-album3 cursor demo" src="https://images.pexels.com/photos/2690807/pexels-photo-2690807.jpeg?cs=srgb&dl=pexels-tobiasbjorkli-2690807.jpg&fm=jpg" alt="ceva" /></Link>
            <div className="text3">Diverse</div>
        </div>
        </div>
    </div>
    </>
    );
}

export default AlbumPage;