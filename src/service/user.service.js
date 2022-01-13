import {urls} from "../configs/urls";


const getAllUsers = () => {
    return fetch(urls.users)
        .then(value => value.json())
}
const getAllPosts = () => {
    return fetch(urls.posts)
        .then(value => value.json())
}

const getById = (id) => {
  return   fetch(`${urls.users}/${id}`)
        .then(value => value.json())
}
export const userService = {getAllUsers, getById,getAllPosts}
