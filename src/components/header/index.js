import React, { useState } from "react";
import { TextField } from "@mui/material";
import * as S  from "./styled";
import useGithub from "../../hooks/github-hooks";


const Header = () => {
    const { getUser} = useGithub();

    const [usernameForSearch, setUsernameForSearche] = useState() 
    
    const submitGetUser = () => {
        if(!usernameForSearch) return;
        return getUser(usernameForSearch);
    };

    return(
        <S.Wrapper>
            <TextField fullWidth label="Username" 
                onChange={(event) => setUsernameForSearche(event.target.value)}
                />
            {/* <input type="text" placeholder="Username" 
                onChange={(event) => setUsernameForSearche(event.target.value)}>
            </input> */}
            <button onClick={submitGetUser} type="submit">
                <span>Buscar</span>
            </button>
        </S.Wrapper>
    )
}

export default Header;
