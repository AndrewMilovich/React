import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./Layout/Layout";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import UserDetails from "./components/UserDetails/UserDetails";
import UserPosts from "./components/UserPosts/UserPost";
import UserPost from "./components/UserPost/UserPost";

function App() {
    return (
        <>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index={'/'} element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={UserPosts}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'posts/:id'} element={<SinglePostPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
