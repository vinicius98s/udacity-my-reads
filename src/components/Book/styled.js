import styled from 'styled-components';

const BookWrapper = styled.div`
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
    }
`

export default BookWrapper;