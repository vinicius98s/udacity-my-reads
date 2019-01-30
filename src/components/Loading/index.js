import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
`

const LoadingWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: fixed;
    left: 0;
    z-index: 9999;
    align-items: center;
    justify-content: center;
    background: white;
`

const StyledLoading = styled.div`
    width: 50px;
    height: 50px;
    border: 5px solid #C1C1C1;
    border-top: 5px solid var(--primaryColor);
    border-radius: 50%;
    animation: ${spinAnimation} .7s infinite linear;
`

const Loading = () => {
    return (
        <LoadingWrapper>
            <StyledLoading />
        </LoadingWrapper>
    )
};

export default Loading;