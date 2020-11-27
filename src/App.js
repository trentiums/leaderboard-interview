import React, { useEffect, useState, memo, createRef } from 'react';
import initialData from '../src/shared/data.json';
import CardItem from './components/CardItem';
import { Container, TableContainer, TableTitle } from "./components/StyledComponent";
import { getUpdatedScore } from './shared/functions';
import AnimateBubbles from "./components/AnimateBubbles";

function App() {
  const [dataState, setData] = useState(initialData);
  useEffect(() => {
    setInterval(() => {
      setData(dataState => getUpdatedScore(dataState))
    }, 1000);
  }, [setData])
  return (
    <Container>
      <TableTitle>Leaderboard</TableTitle>
      <TableContainer>
        <CardItem isHeader={true}/>
          <AnimateBubbles>
            {dataState.map((dataItem,index)=>
              <CardItem 
                ref={createRef()}
                key={dataItem.userID}
                data={{...dataItem, rank: index + 1}}
                previousData={initialData}
              />
            )}
          </AnimateBubbles>
      </TableContainer>
    </Container>
  );
}

export default memo(App);
