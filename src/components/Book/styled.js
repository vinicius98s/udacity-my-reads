import styled from 'styled-components';

export const BookWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;

    .book {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 335px;
        max-width: 220px;
        min-width: 12vw;
        margin: 20px 60px 30px 60px;
        text-align: center;
    }

    .book *:not(img) {
        z-index: 1;
    }

    .book h3 {
        font-size: 16px;
        margin-top: 10px;
    }

    .book p {
        font-size: 14px;
        margin-bottom: 10px;
    }

    .book img {
        width: 140px;
        height: 180px;
        margin: 0px auto;
        z-index: 0;
        cursor: pointer;
    }
`
export const BookModalWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    background: rgba(255, 255, 255, 0.95);
    position: fixed;
    overflow-y: scroll;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    color: black;
    text-align: left;
    padding: 20px;

    ::-webkit-scrollbar {
        width: 10px;
        background: var(--primaryColor);
    }

    .modal-text {
        margin: 0 20px;
    }

    .modal-text h3 {
        margin-top: 10px;
    }

    .tags {
        background: var(--primaryColor);
        color: white !important;
        padding: 0 8px;
        font-size: 16px;
        margin-left: 6px;
    }

    .modal-text h3 > span {
        color: var(--lightGrey);
        font-size: 16px;
    }

    .modal-text h1 {
        margin-bottom: 20px;
    }

    .close {
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;
        font-size: 20px;
        background: var(--primaryColor);
        padding: 6px 19px 9px 18px;
        border-radius: 50%;
        color: white;
    }

    .large-image {
        max-height: 94.5vh;
    }
`