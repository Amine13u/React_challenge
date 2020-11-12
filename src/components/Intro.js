import React from "react";

function Intro(props) {
    return (
        <section id="intro-section" class="sperator">
            <h2>
                Hello , my name is <span class="text-important"> {props.name} </span>,<br />
                and i make a horrible websites
            </h2>
            <img src={props.img} alt="me" />
        </section>
    );
}

export default Intro;