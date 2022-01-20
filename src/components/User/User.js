import './User.css'
import {Link} from "react-router-dom";

const User = ({user}) => {

    const {id, name} = user

    return (
        <div className={'activeUser'}>
            <div>
                <h2>Id:{id}</h2>
                <h2>{name}</h2>
            </div>

            <Link to={id.toString()} state={user}>
                <button>details</button>
            </Link>

        </div>
    );
};

export default User;