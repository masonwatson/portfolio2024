import "./Project.less";
import { forwardRef, useState } from "react";

// const Project = forwardRef(({data}, ref) => (
//     const [onHover, setOnHover] = useState(false);

//     return (
//         <li
//             id={data.projData.id}
//             className={`project-item preserve-3d ${data.activeItemID === data.projData.id ? "active" : !!data.activeItemID ? "inactive" : ""}`}
//             onClick={(e) => data.handleItemClick(e.currentTarget.id)}
//         >
//             <div ref={ref} className="preserve-3d text-container">
//                 {data.activeItemID === data.projData.id ? (
//                     <div className="stack-container">
//                         {data.projData.stack.map((tech) => {
//                             return (
//                                 <div 
//                                     key={`${tech}-${data.projData.id}`} 
//                                     className="tech-name"
//                                     onMouseEnter={}
//                                 >
//                                     <span>{tech}</span>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 ) : undefined}
//                 <div className="project-name preserve-3d">
//                     <span>{data.projData.name}</span>
//                 </div>
//             </div>
//         </li>
//     );
// ));

const Project = forwardRef(function Project({data}, ref) {
    const {activeItemID, projData, handleItemClick} = data;

    return (
        <li
            id={projData.id}
            className={`project-item preserve-3d ${activeItemID === projData.id ? "active" : !!activeItemID ? "inactive" : ""}`}
            onClick={(e) => handleItemClick(e.currentTarget.id)}
        >
            <div ref={ref} className="preserve-3d text-container">
                {activeItemID === projData.id ? (
                    <div className="stack-container">
                        {projData.stack.map((tech) => {
                            return (
                                <div key={`${tech}-${projData.id}`} className="tech-name">
                                    <span>{tech}</span>
                                </div>
                            );
                        })}
                    </div>
                ) : undefined}
                <div className="project-name preserve-3d">
                    <span>{projData.name}</span>
                </div>
            </div>
        </li>
    );
})

export default Project;