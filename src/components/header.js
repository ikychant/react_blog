import React from 'react';

const Header = ({title, job, avatar}) => { 
    return (
        <header>
            <h1>{title}</h1>
            <br/>
            <h4>{job}</h4>
            <br/>
            <img src={avatar} />
        </header>
    )
}

export default Header;