import "./Home.less";
import { useState, createRef } from "react";
import AnimateProjects from "./AnimateProjects/AnimateProjects";
import Project from "./Project/Project";

function Home({data}) {
    const {handleItemClick, activeItemID, projectsData} = data;
    return (
        <div className="home-wrapper preserve-3d">
            <div className="stage-container stage-perspective parallax-perspective preserve-3d">
                <div className="stage preserve-3d">
                    <ul className="project-list preserve-3d">
                        <AnimateProjects>
                            {projectsData.map((projData) => {
                                return <Project 
                                    key={projData.id} 
                                    data={{projData, activeItemID, handleItemClick}} 
                                    ref={createRef()}
                                />
                            })}
                        </AnimateProjects>
                    </ul >
                </div>
            </div>
        </div>
    );
}

export default Home;
