import React from "react";
import * as S from './styled'
import useGithub from "../../hooks/github-hooks";

const Profile = () => {
    const {githubState} = useGithub();

    return(
        <S.Wrapper>
            
            <S.WrapperImg src={githubState.user.avatar_user}
                alt="avatar of user"/>
            <S.WrapperInfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUserGenerics>
                        <h3>Username: </h3>
                        <a href="https://github.com/Gabri8ell" 
                            rel="noopener noreferrer" target="_blank">
                                {githubState.user.login}
                        </a>
                    </S.WrapperUserGenerics>
                    
                </div>
                <S.WrapperUserGenerics>
                        <h3>Company: </h3>
                        <span>{githubState.user.company}</span>
                    </S.WrapperUserGenerics>
                    <S.WrapperUserGenerics>
                        <h3>Location: </h3>
                        <span>{githubState.user.location}</span>
                    </S.WrapperUserGenerics>
                    <S.WrapperUserGenerics>
                        <h3>Blog: </h3>
                        <span>{githubState.user.blog}</span>
                    </S.WrapperUserGenerics>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gist</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    );
}

export default Profile;