import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMenu = styled.nav`
    width: 100%;
    height: 80px;
    background: var(--primaryColor);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 -3px 25px rgba(0,0,0, 0.15);
    
    ul {
        list-style: none;
    }

    li {
        display: inline-block;
        margin: 0 10px;
        color: white;
        cursor: pointer;
        position: relative;
    }
    
    li::after {
        content: '';
        opacity: 0;
        width: 100%;
        height: 7px;
        background: white;
        position: absolute;
        margin-top: 20px;
        transition: .3s;
    }

    li:hover::after {
        opacity: 1;
    }
`

const Menu = () => {
    return(
        <StyledMenu className='menu'>
            <ul>
                <Link to='/want-to-read'>
                    <li>
                        <p>Want to read</p>
                    </li>
                </Link>
                <Link to='/currently-reading'>
                    <li>
                        <p>Currently reading</p>
                    </li>
                </Link>
                <Link to='/read'>
                    <li>
                        <p>Read</p>
                    </li>
                </Link>
            </ul>
        </StyledMenu>
    )
}

export default Menu;