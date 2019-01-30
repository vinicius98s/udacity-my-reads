import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const StyledButton = styled.button`
    width: 55px;
    height: 55px;
    background: ${props => !props.disabled ? 'var(--primaryColor);' : 'var(--lightGrey);'}
    border-radius: 50%;
    cursor: pointer;
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .5s ease;
    border: none;
    outline: none;

    ::after {
        content: '+';
        font-size: 32px;
        color: white;
    }

    :hover {
        transform: ${props => !props.disabled ? 'scale(1.05);' : 'scale(1);'}
    }
`
const AddButton = (props) => {
    if(props.location.pathname === '/add') {
        return(
            <Link to={'/add'}>
                <StyledButton disabled={true} />
            </Link>
        )
    }

    return(
        <Link to={'/add'}>
            <StyledButton />
        </Link>
    )
};

const Button = withRouter(props => <AddButton {...props}/>);

export default Button;