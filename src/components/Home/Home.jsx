import "./Home.less";
import { useState, createRef } from "react";
import AnimateProjects from "./AnimateProjects/AnimateProjects";
import Project from "./Project/Project";
import config from "../../config/config.json";

function Home() {
    const [activeListItemID, setActiveListItem] = useState(undefined);
    const [projectsData, setProjectsData] = useState(config.projects);

    const handleItemClick = (activeID) => {
        setProjectsData(projectsData.sort((a, b) => {
            return Number(b.id === activeID) - Number(a.id === activeID);
        }));
        setActiveListItem(activeID);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className="home-wrapper preserve-3d">
            <div className="stage-container stage-perspective parallax-perspective preserve-3d">
                <div className="stage preserve-3d">
                    <ul className="project-list preserve-3d">
                        <AnimateProjects>
                            {projectsData.map((projData) => {
                                return <Project key={projData.id} data={{projData, activeListItemID, handleItemClick}} ref={createRef()}/>
                            })}
                        </AnimateProjects>
                    </ul >
                </div>
            </div>
        </div>
    );
}

export default Home;
