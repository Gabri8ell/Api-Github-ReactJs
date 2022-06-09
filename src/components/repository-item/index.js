import React from "react"
import * as S from "./styled"

const RepositoryItem = ({ name, linkToRepo, fullName}) => {
    return(
        <S.Wrapper>
            <S.WrapperTitle>{name}</S.WrapperTitle>
            <S.WrapperFullName>Full name:
                <S.WrapperLink href={linkToRepo} rel="noopener noreferrer" 
                    target="_blank">
                        {fullName}
                </S.WrapperLink> 
            </S.WrapperFullName>
        </S.Wrapper>
    )
}

export default RepositoryItem;