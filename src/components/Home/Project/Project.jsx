import "./Project.less";
import { forwardRef } from "react";

const Project = forwardRef(({data}, ref) => (
    <li
        id={data.projData.id}
        className={`project-item preserve-3d ${data.activeListItemID === data.projData.id ? "active" : !!data.activeListItemID ? "inactive" : ""}`}
        onClick={(e) => data.handleItemClick(e.currentTarget.id)}
    >
        <div ref={ref} className="preserve-3d text-container">
            <div className={`stack-container ${data.activeListItemID === data.projData.id ? "active" : ""}`}>
                {data.projData.stack.map((tech) => {
                    return <span key={`span-${tech}-${data.projData.id}`} className="techName">{tech}</span>;
                })}
            </div>
            <div className="project-name preserve-3d">
                <span>{data.projData.name}</span>
            </div>
        </div>
    </li>
));

export default Project;