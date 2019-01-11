import styled from 'styled-components';

const FormWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: -80px;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .search-form {
        position: fixed;
        top: 0;
        width: 100%;
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

const StyledInput = styled.input`
    width: 100%;
    height: 100px;
    border: none;
    border-bottom: 1px solid #C1C1C1;
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

export {
    FormWrapper,
    StyledInput
}