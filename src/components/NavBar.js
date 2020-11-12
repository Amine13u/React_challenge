import React from "react";

function NavBar(props) {
    return (
        <header class="sperator">
            <h1>{props.name}</h1>
            <ul class="nav-menu">
                {props.info.map((el, i) => 
                <li key={i}><a href={el.href}>{el.text}</a></li>)}
            </ul>
        </header>
    );
}

export default NavBar;