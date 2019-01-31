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
    box-shadow: 0 5px 30px rgba(0,0,0, 0.15);

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

    li:hover::after {
        opacity: 1;
    }
`

const StyledLi = styled.li`
    ::after {
        content: '';
        ${props => props.currentShelf === props.shelf ? 'opacity: 1;' : 'opacity: 0;'}
        width: 100%;
        height: 7px;
        background: white;
        position: absolute;
        margin-top: 20px;
        transition: .3s;
    }
`

const Menu = (props) => {
    return(
        <StyledMenu className='menu'>
            <ul>
                <Link
                    to={{
                        pathname: '/want-to-read'
                    }}
                    onClick={() => props.handleShelfState('wantToRead')}>

                    <StyledLi shelf='wantToRead' currentShelf={ props.currentShelf }>
                        <p>Want to read</p>
                    </StyledLi>
                </Link>
                <Link
                    to={{
                        pathname: '/currently-reading'
                    }}
                    onClick={() => props.handleShelfState('currentlyReading')}>

                    <StyledLi shelf='currentlyReading' currentShelf={ props.currentShelf }>
                        <p>Currently reading</p>
                    </StyledLi>
                </Link>
                <Link
                    to={{
                        pathname: '/read'
                    }}
                    onClick={() => props.handleShelfState('read')}>
                    <StyledLi shelf='read' currentShelf={ props.currentShelf }>
                        <p>Read</p>
                    </StyledLi>
                </Link>
            </ul>
        </StyledMenu>
    )
}

export default Menu;