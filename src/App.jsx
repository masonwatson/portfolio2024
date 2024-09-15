import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { useState, useLayoutEffect } from "react";
import config from "./config/config.json";
import "./App.less";

function App() {
    const [activeItemID, setActiveItemID] = useState(undefined);
    const [projectsData, setProjectsData] = useState(config.projects);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 430);
    }

    const handleHeaderClick = () => {
        setActiveItemID(undefined);
        setProjectsData(config.projects);
    }

    const handleItemClick = (activeID) => {
        setProjectsData(projectsData.sort((a, b) => {
            return Number(b.id === activeID) - Number(a.id === activeID);
        }));
        setActiveItemID(activeID);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setProjectsData(projectsData.filter((proj) => proj.id === activeID));
    }

    useLayoutEffect(() => {
        window.addEventListener("resize", handleResize)
    }, []);

    return (
        <div className="App">
            {!!activeItemID || isMobile ? <Header data={{handleHeaderClick, activeItemID}}/> : undefined}
            <Home data={{handleItemClick, activeItemID, projectsData}}/>
            {!(activeItemID || isMobile) ? <Footer/> : undefined}
        </div>
    );
}

export default App;
