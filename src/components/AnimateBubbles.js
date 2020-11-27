import React, { useState, useLayoutEffect, useEffect } from "react";
import {usePrevious, calculateBoundingBoxes} from "../shared/functions";

const AnimateBubbles = ({ children }) => {
  const [boundingBox, setBoundingBox] = useState({});
  const [prevBoundingBox, setPrevBoundingBox] = useState({});
  const prevChildren = usePrevious(children);

  useLayoutEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(children);
    setBoundingBox(newBoundingBox);
  }, [children]);

  useLayoutEffect(() => {
    const prevBoundingBox = calculateBoundingBoxes(prevChildren);
    setPrevBoundingBox(prevBoundingBox);
  }, [prevChildren]);

  useEffect(() => {
    const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;
    if (hasPrevBoundingBox) {
      React.Children.forEach(children, child => {
        const domNode = child.ref.current;
        const firstBox = prevBoundingBox[child.key];
        const secondBox = boundingBox[child.key];
        const changeInX = firstBox.top - secondBox.top;

        if (changeInX) {
          requestAnimationFrame(() => {
            domNode.style.transform = `translateX(${changeInX/10}px) translateY(${changeInX}px)`;
            domNode.style.transition = "transform ease-in 0s";

            requestAnimationFrame(() => {
              domNode.style.transform = "";
              domNode.style.transition = "transform ease-out 300ms";
            });
          });
        }
      });
    }
  }, [boundingBox, prevBoundingBox, children]);

  return children;
};

export default AnimateBubbles;
