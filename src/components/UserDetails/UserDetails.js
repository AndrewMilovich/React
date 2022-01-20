import './UserDetails.css'
import {Link, useLocation, useParams} from "react-router-dom";
import {Outlet} from "react-router-dom";

const UserDetails = () => {
    const {id} = useParams()
    console.log(id);
    const {state: userDetails} = useLocation()
    return (
        <div>
            {userDetails && (
                <div className={'user'}>
                    <div className={'name'}><h2>Id:{userDetails.id}</h2>
                        <h2>Name:{userDetails.name}</h2>
                        <h2>Username:{userDetails.username}</h2>
                        <h4>Email:{userDetails.email}</h4></div>
                    <div>Address:
                        <ul>
                            <li>City:{userDetails.address.city}</li>
                            <li>Street:{userDetails.address.street}</li>
                            <li>Suite:{userDetails.address.suite}</li>
                            <li>Zipcode:{userDetails.address.zipcode}</li>
                            <ul>
                                <li>lat:{userDetails.address.geo.lat}</li>
                                <li>lng:{userDetails.address.geo.lng}</li>
                            </ul>
                        </ul>
                        <h4>Phone:{userDetails.phone}</h4>
                        <h4>Website:{userDetails.website}</h4>
                        Company:
                        <ul>
                            <li>name:{userDetails.company.name}</li>
                            <li>catchPhrase:{userDetails.company.catchPhrase}</li>
                            <li>bs:{userDetails.company.bs}</li>
                        </ul>
                    </div>

                    <Link to={"posts"}>get post</Link>
<Outlet/>
                </div>
            )}

        </div>
    );
};

export default UserDetails;