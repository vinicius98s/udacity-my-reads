import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled.div`
    width: 55px;
    height: 55px;
    background: var(--primaryColor);
    border-radius: 50%;
    cursor: pointer;
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .5s ease;

    ::after {
        content: '+';
        font-size: 32px;
        color: white;
    }

    :hover {
        transform: scale(1.05);
    }
`

const AddButton = () => {
    return(
        <Link to={'/add'}>
            <StyledButton />
        </Link>
    )
}

export default AddButton;