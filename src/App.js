import './App.css';
import User from "./components/User/User";
import UserDetails from "./components/Userdetais/UserDetails";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import {useState} from "react";

function App() {

    return (
        <div>
<div>
    <Users/>

</div>
            <Posts/>
        </div>
    );
}

export default App;
