import React, { useEffect, useState, memo } from 'react';
import initialData from '../src/shared/data.json';
import CardItem from './components/CardItem';
import { Container, TableContainer } from "./components/StyledComponent";
import { getUpdatedScore } from './shared/functions';

function App() {
  const [dataState, setData] = useState(initialData);
  useEffect(() => {
    setInterval(() => {
      setData(dataState => getUpdatedScore(dataState))
    }, 1000);
  }, [setData])
  return (
    <Container>
      <TableContainer>
        <CardItem isHeader={true}/>
          {dataState.map((dataItem,index)=>
            <CardItem 
              key={dataItem.userID}
              data={{...dataItem, rank: index + 1}}
            />
          )}
      </TableContainer>
    </Container>
  );
}

export default memo(App);
