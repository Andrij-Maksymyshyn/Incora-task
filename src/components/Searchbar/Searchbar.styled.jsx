import styled from 'styled-components';

export const Box = styled.div`
     padding: 20px;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
 display: inline-block;
    margin-right: 15px;
    width: 20%;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
    border-color: dimgrey;

  &::placeholder {
    font: inherit;
    font-size: 14px;
  }
`;

export const Button = styled.button`
display: inline-block;
    width: 10%;
    height: 29px;
    border: 0;
    cursor: pointer;
    outline: none;
    opacity: 0.8;
    background-color: forestgreen;
    border-radius: 5px;

     &:hover, &:focus {
    opacity: 1;
  }
`;