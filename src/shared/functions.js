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
