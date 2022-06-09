import React, { createContext, useCallback, useState } from "react";
import api from '../services/Api';

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],

})

const GithubProvider = ({children}) => {
    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user:{
            id: undefined,
            login: undefined,
            name: undefined,
            htmlUrl: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            public_gists: 0,
            following: 0,
            public_repos: 0,
            avatar_user: undefined,
        },

        repositories:[],
        starred: [],
    });

    const getUser = (username) =>{
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,
        }));

        api.get( `users/${ username }`).then( ({ data }) => {
            setGithubState((prevState) => ({
                ...prevState,
                hasUser: true,
                user:{
                    id: data.id,
                    login: data.login,
                    name: data.name,
                    htmlUrl: data.html_url,
                    blog: data.blog,
                    company: data.company,
                    location: data.location,
                    followers: data.followers,
                    public_gists: data.public_gists,
                    following: data.following,
                    public_repos: data.public_repos,
                    avatar_user: data.avatar_url,
                },
            }));

        }).catch(function (error)  {
            if(error.response.status === 404) alert("Nome de usuário inválido")

        }).finally(() =>{
            setGithubState((prevState) => ({
                ...prevState,
                loading: !prevState.loading,
            }));
        });

    }

    const getUserRepos = (username) =>{
        api.get( `users/${ username }/repos`).then( ({ data }) => {
            setGithubState((prevState) => ({
                ...prevState,
                repositories: data,
            }));
        })
    
    }
    const getUserStarred = (username) =>{
        api.get( `users/${ username }/starred`).then( ({ data }) => {
            setGithubState((prevState) => ({
                ...prevState,
                starred: data,
            }));
        })
    }

    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
    };

    return(
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    )

}

export default GithubProvider;