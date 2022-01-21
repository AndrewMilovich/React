import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Outlet} from "react-router-dom";

import {albumService} from "../../service/album.service";
import Album from "../Album/Album";

const UserAlbum = () => {
    const {id} = useParams()
    const [album, setAlbum] = useState([])

    useEffect(() => {
        albumService.getAll().then(value => setAlbum(value.filter(value => value.userId == id)))
    }, [id])

    return (
        <div>
            {album.map(album => <Album key={album.id} album={album}/>)}
            <Outlet/>
        </div>
    );
};

export default UserAlbum;