import {Routes, Route, Navigate} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import EpisodePage from "./pages/EpisodePage";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'episodes/1'}/>}/>
                    <Route path={'episodes/:id'} element={<EpisodePage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
