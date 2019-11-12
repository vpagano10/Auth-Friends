// REACT
import React, { useState, useEffect } from 'react';

// COMPONENTS
import api from '../utils/api';

// STYLING
import styled from 'styled-components';

const FriendDetails = styled.div`
    border: 1px solid #E9E9E9;
    padding: 10px;
    margin-bottom: 10px;
`;

function Account(props) {
    const [users, setUsers] = useState([]);
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChanges = (event) => {
        event.preventDefault();
        setFriend({
            ...friend,
            [event.target.name]: event.target.value,
        });
    }

    const MakeUser = () => {
            api()
                .post('/api/friends', friend)
                .then(res => {
                    console.log('New friend console log', res)

                })
                .catch(err => {
                    console.log(err)
                })
    }

    useEffect(() => {
        api()
            .get('/api/friends')
            .then(res => {
                console.log('API console log', res);
                setUsers(
                    res.data
                )
            })
            .catch(err => {
                console.log('Error with GET frinds request', err)
            });
    }, []);

    // console.log('Object users console log', 
    //     Object.values(users).map((user, index) => user.map(user => user.name)));

    console.log('users console log', users);

    if (users) {
    return (
        <div>
            <form>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    value={friend.name}
                    onChange={handleChanges}
                /><br />
                <input
                    type='text'
                    name='age'
                    placeholder='age'
                    value={friend.age}
                    onChange={handleChanges}
                /><br />
                <input
                    type='text'
                    name='email'
                    placeholder='email'
                    value={friend.email}
                    onChange={handleChanges}
                /><br />
                <button onClick={MakeUser}>New Friend</button>
            </form><br />
            <h1>My Friends</h1>
            {users.map(user => {
                return (
                    <div>
                        <h1>{user.name}</h1>
                        <h3>Age: {user.age}</h3>
                        <FriendDetails>
                            Email: {user.email}
                        </FriendDetails>
                    </div>
                )
            })}
        </div>
    )};
};

export default Account;