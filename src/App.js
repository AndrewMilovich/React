import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./Layout/Layout";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
    return (
        <>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index={'/'} element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'users/:id'} element={<UserDetails/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'posts/:id'} element={<SinglePostPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
