import React from "react";
import { defaultPic } from "../assets/image";
import { TableItem, ItemRank, ItemProfile, ItemPoints, ItemNumber, ItemImage } from "./StyledComponent";

const CardItem = ({data, isHeader}) => {
  return (
    <TableItem isHeader={isHeader}>
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
};

export default CardItem;
