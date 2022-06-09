import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;

    //acrescentei
    width: 95%;
    justify-content: center;
    margin-top: 20px;
    justify-content: flex-start;
`;

export const WrapperImg = styled.img`
    border-radius: 50%;
    //modifiquei - era 200px
    width: 270px;

    //acrescentei
    margin-right: 25px;
    margin-left: 12%;
`;

export const WrapperUserGenerics = styled.div`
    display: flex;
    align-items: center;


    h3{
        //modifiquei - era 8px
        margin-right: 8px;
    }

    a{
        font-size: 18px;
        color: blue;
        font-weight: bold;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div{
        margin: 8px;
        text-align: center;
    }
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    margin-left: 8px;

    //acrescentei
    margin-left: 25px;
    align-self: center;

    h1{
        font-size: 32px;
        font-weight: bold;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
    }
    
    h4{
        font-size: 16px;
        font-weight: bold;
    }
`;