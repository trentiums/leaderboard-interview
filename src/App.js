import React, { useEffect, useState, memo } from 'react';
import initialData from '../src/shared/data.json';
import CardItem from './components/CardItem';
import { Container, TableContainer } from "./components/StyledComponent";

function App() {
  const [dataState, setData] = useState(initialData);
  useEffect(() => {
    setData(initialData);
  }, [])
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
