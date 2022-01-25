import {useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";


function App() {
    const [trigger, setTrigger] = useState(null)
    const [updateCar, setUpdateCar] = useState({})
    const update = data => {
        setTrigger(data)
    }
    return (
        <div>
            <Form update={update} updateCar={updateCar}/>
            <Cars trigger={trigger} update={setTrigger} setUpdateCar={setUpdateCar}/>
        </div>
    );
}

export default App;
