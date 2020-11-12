import React from "react";

function Project(props) {
    return (
        <section id="projects-section">
            <h2 class="text-important text-center">Projects</h2>
            <div class="projects-container">
                {props.projects.map((el, i) => 
                    <div class="project-card" key={i}>
                        <h3>{el}</h3>
                        <img src={props.image} alt="project" />
                        <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ipsam
                                ullam autem consequuntur.
                        </p>
                        <p>Github <a href="#">link</a></p>
                    </div>
                )}
            </div>
        </section>  
    );
}

export default Project;