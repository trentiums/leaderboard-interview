import React, { useEffect, useRef } from "react";
import { animSpeedController, dataController } from "./constants";

const sortArrayOfObjects = (arr, key) => {
  return arr.sort((a, b) => {
      return a[key] - b[key];
  });
};

export const getUpdatedScore = (data) => {
  const tempData = data.map((item) => {
    return {
      ...item,
      score: (item.score += (Math.floor(Math.random() * 100) < animSpeedController ? Math.floor(Math.random() * dataController) : 0))
    };
  });
  return sortArrayOfObjects(tempData, 'score').reverse();
}

export const usePrevious = value => {
  const prevChildrenRef = useRef();
  useEffect(() => {
    prevChildrenRef.current = value;
  }, [value]);
  return prevChildrenRef.current;
};

export const calculateBoundingBoxes = children => {
  const boundingBoxes = {};
  React.Children.forEach(children, child => {
    const domNode = child.ref.current;
    const nodeBoundingBox = domNode.getBoundingClientRect();
    boundingBoxes[child.key] = nodeBoundingBox;
  });
  return boundingBoxes;
};