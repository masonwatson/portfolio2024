import React, { useEffect, useLayoutEffect, useState } from "react";
import CalculateBoundingBoxes from "./Helpers/CalculateBoundingBoxes";
import usePrevious from "../../../hooks/usePrevious";

function AnimateProjects({children}) {
    const [boundingBox, setBoundingBox] = useState({});
    const [prevBoundingBox, setPrevBoundingBox] = useState({});
    const prevChildren = usePrevious(children);

    useLayoutEffect(() => {
        const newBoundingBox = CalculateBoundingBoxes(children);
        setBoundingBox(newBoundingBox);
    }, [children]);

    useLayoutEffect(() => {
        const prevBoundingBox = CalculateBoundingBoxes(prevChildren);
        setPrevBoundingBox(prevBoundingBox);
    }, [prevChildren]);

    useEffect(() => {
        const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;

        if (hasPrevBoundingBox > 0) {
            React.Children.forEach(children, child => {
                const domNode = child.ref.current;
                const firstBox = prevBoundingBox[child.key];
                const lastBox = boundingBox[child.key];
                const changeInY = firstBox?.top - lastBox?.top;

                if (changeInY) {
                    requestAnimationFrame(() => {
                        domNode.style.transform = `translateY(${changeInY}px)`;
                        domNode.style.transition = "transform 0s";

                        requestAnimationFrame(() => {
                            domNode.style.transform = "";
                            domNode.style.transition = "transform 500ms";
                        })
                    });
                }
            })
        }
    }, [boundingBox, prevBoundingBox, children]);

    return children;
}

export default AnimateProjects;