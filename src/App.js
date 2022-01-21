import {Route, Routes} from "react-router-dom";

import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./Layout/Layout";
import PostDetails from "./components/PostDetails/PostDetails";
import UserDetails from "./components/UserDetails/UserDetails";
import UserPosts from "./components/UserPosts/UserPosts";
import Comments from "./components/Comments/Comments";
import UserAlbum from "./components/UserAlbum/UserAlbum";
import Photos from "./components/Photos/Photos";

function App() {
    return (
        <>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UserPosts/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<UserAlbum/>}>
                            <Route path={'photos'} element={<Photos/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<Comments/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
