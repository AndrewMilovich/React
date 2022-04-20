import React, {FC} from 'react';
import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import {Navigate, Route, Routes} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import MoviesListCard from "./components/MoviesListCard/MoviesListCard";
import UserLogin from "./components/UserLogin/UserLogin";
import UserRegistration from "./components/UserRegistration/UserRegistration";
import User from './components/User/User';
// import User from './components/User/User';


const App: FC = () => {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<Navigate to={"movies/1"}/>}/>
                    <Route path={'/user'} element={<UserLogin/>}/>
                    <Route path={"movies/:id"} element={<MoviesPage/>}/>
                    <Route path={"movies/:id/details"} element={<MoviesListCard/>}/>
                    <Route path={"/registration"} element={<UserRegistration/>}/>
                    <Route path={"/userId"} element={<User/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
