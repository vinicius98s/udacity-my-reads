import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
`

const StyledLoading = styled.div`
    width: 50px;
    height: 50px;
    border: 5px solid #C1C1C1;
    border-top: 5px solid var(--primaryColor);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    animation: ${spinAnimation} .7s infinite linear;
`

const Loading = () => {
    return (
        <StyledLoading />
    )
}

export default Loading;