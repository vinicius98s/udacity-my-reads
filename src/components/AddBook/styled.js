import styled from 'styled-components';

export const FormWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: -80px;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        align-self: center;
        justify-self: center;
        margin-top: 40px;
    }

    .search-form {
        position: fixed;
        top: 0;
        z-index: 2;
        width: 100%;
        box-shadow: 0 5px 30px rgba(0,0,0, 0.15);
    }

    h1 {
        color: var(--lightGrey);
    }

    .arrow-right {
        font-size: 30px;
        top: 28px;
        left: 10px;
        position: absolute;
        color: #707070;
        z-index: 1;
        text-decoration: none;
        cursor: pointer;
    }

    h1 {
        justify-self: center;
    }
`

export const StyledInput = styled.input`
    width: 100%;
    height: 100px;
    border: none;
    font-size: 20px;
    padding: 30px 60px;
    position: relative;

    ::placeholder {
        font-size: 20px;
        color: #C1C1C1;
    }

    :focus {
        outline: none;
    }
`