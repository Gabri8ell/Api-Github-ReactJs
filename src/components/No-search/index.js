import React from "react";
import * as S from "./styled"
import logo_github from "../image/logo_github.png"

const NoSearch = () => {
    return (
        <S.Wrapper>
            <h1>Nenhum usuário pesquido!</h1>
            <img src={logo_github} alt="logo_github"></img>
        </S.Wrapper>
    )
}

export default NoSearch;