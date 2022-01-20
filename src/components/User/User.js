import './User.css'

const User = ({user, getUser}) => {

    const {id, name} = user

    return (
        <div className={'activeUser'}>
            <div>
                <h2>Id:{id}</h2>
                <h2>{name}</h2>
            </div>

            <button onClick={() => getUser(user)}>details</button>

        </div>
    );
};

export default User;