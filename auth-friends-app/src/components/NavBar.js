// REACT
import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

// COMPONENTS
import { getToken } from '../utils/api';
import Account from './Account';
import Home from './Home';
import Logout from './Logout';
import ProtectedRoute from './ProtectedRoute';
import SignIn from './SignIn';

// STYLING
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 100%;
    max-width: 500px;
    margin: auto;
`;
const Nav = styled.nav`
    background: #F0F0F0;
	padding: 10px;
	margin-bottom: 50px;
    border-radius: 4px;
    a {
        text-decoration: none;
        color: darkblue;
        margin-right: 4%;
        margin-left: 4%;
    }
`;

function NavBar() {
    const signedIn = getToken();

    return (
        <WrapperDiv>
            <Nav>
                <Link to='/'>Home</Link>
                {!signedIn && <Link to='/signin'>Sign In</Link>}
                {signedIn && <Link to='/account'>Account</Link>}
                {signedIn && <Link to='/logout'>Logout</Link>}
            </Nav>

            <Route exact path='/' component={Home} />
            <Route exact path='/signin' component={SignIn} />
            <ProtectedRoute exact path='/account' component={Account} />
            <ProtectedRoute exact path='/logout' component={Logout} />
        </WrapperDiv>
    );
};

export default withRouter(NavBar);