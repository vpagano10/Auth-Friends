// REACT
import React, { useState } from 'react';

// COMPONENTS
import api from '../utils/api';

// STYLING
import styled from 'styled-components';

const ErrorDiv = styled.div`
    color: red;
    margin-bottom: 20px;
`;
const Input = styled.input`
    display: block;
	padding: 10px;
	width: 100%;
	margin-bottom: 10px;
	outline: none;
	border-radius: 2px;
	border: 1px solid #F0F0F0;
`;
const Button = styled.button`
    background: darkblue;
	color: white;
	border: none;
	border-radius: 4px;
	padding: 10px 20px;
	cursor: pointer;
	font-size: 14px;
	font-weight: 500;
`;

function SignIn(props) {
    const [error, setError] = useState();
    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        event.preventDefault();
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        api()
            .post('/api/login', data)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                props.history.push('/account')
            })
            .catch(err => {
                console.log(err);
                // setError(err.res.data.message)
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <ErrorDiv className='error'>{error}</ErrorDiv>}
            <Input
                type='username'
                name='username'
                placeholder='username'
                value={data.username}
                onChange={handleChange}
            />
            <Input
                type='password'
                name='password'
                placeholder='password'
                value={data.password}
                onChange={handleChange}
            />
            <Button type='submit'>Sign In</Button>
        </form>
    );
};

export default SignIn;