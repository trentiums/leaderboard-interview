import React, { forwardRef } from "react";
import { defaultPic, increase, decrease, neutral } from "../assets/image";
import { TableItem, ItemRank, ItemProfile, ItemPoints, ItemNumber, ItemImage, IconImage } from "./StyledComponent";

const CardItem = forwardRef(({data, isHeader, previousData}, ref) => {
  let prevRank = data?.rank;
  previousData && previousData.length > 0 && previousData?.forEach((prevData, index) => {
    if (prevData.userID === data.userID) prevRank = index + 1;
  });
  return (
    <TableItem isHeader={isHeader} ref={ref}>
      {!isHeader ? 
        data?.rank < prevRank ?
          <IconImage src={increase} alt="" /> : 
          data?.rank > prevRank ?
            <IconImage src={decrease} alt="" /> : 
            <IconImage src={neutral} alt="" /> :
        ''}
      <ItemRank isHeader={isHeader}>
        {isHeader ? 'Rank' : <ItemNumber>{data?.rank}</ItemNumber>}
      </ItemRank>
      <ItemProfile isHeader={isHeader}>
        {!isHeader && <ItemImage src={data?.picture || defaultPic} alt="" />}
        {data?.displayName || 'Profile'}
      </ItemProfile>
      <ItemPoints isHeader={isHeader}>{data?.score || 'Points'}</ItemPoints>
    </TableItem>
  );
});

export default CardItem;
