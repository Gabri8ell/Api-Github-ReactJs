import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin: 2px 5px;
    width: 350px;
    height: 150px;
    align-content: center;
    overflow-wrap: break-word;
    text-align: center;

    &:hover{
        background-color: #cdcdd1;
        width: 360px;
        height: 160px;
    }
` ;

export const WrapperTitle = styled.h2`
    font-size: 22px;
    font-weight: bold;
    margin: 8px 0;
    color: crimson;
`;

export const WrapperFullName = styled.h2`
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0;
    color: #2d3748;
`;


export const WrapperLink = styled.a`
    font-style: 16px;
    font-weight: bold;
    margin: 8px 0;
    color: #3182ce;
`;