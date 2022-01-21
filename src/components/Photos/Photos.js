import React, {useEffect, useState} from 'react';
import {albumService} from "../../service/album.service";
import {useParams} from "react-router-dom";
import Photo from "../Photo/Photo";

const Photos = () => {
    const{id}=useParams()

    const [photos,setPhotos]=useState([])
    useEffect(()=>{
        albumService.getPhoto(id).then(value =>setPhotos([...value]) )
    },[id])
    return (
        <div>
            {photos.map(photo=><Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export default Photos;