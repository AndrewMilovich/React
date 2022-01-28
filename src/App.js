import {Routes, Route, Navigate} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import EpisodePage from "./pages/EpisodePage/EpisodePage";
import EpisodeDetailsPage from "./pages/EpisodeDetailsPage/EpisodeDetailsPage";
import {useState} from "react";

function App() {

    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'episodes/1'}/>}/>
                    <Route path={'episodes/:id'} element={<EpisodePage/>}/>
                    <Route path={'episodeDetails'} element={<EpisodeDetailsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
