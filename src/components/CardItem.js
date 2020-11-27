import React, { forwardRef } from "react";
import { defaultPic } from "../assets/image";
import { TableItem, ItemRank, ItemProfile, ItemPoints, ItemNumber, ItemImage } from "./StyledComponent";

const CardItem = forwardRef(({data, isHeader}, ref) => {
  return (
    <TableItem isHeader={isHeader} ref={ref}>
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
