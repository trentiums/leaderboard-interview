import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 0;
  font-family: sans-serif;
  height: 100%;
  width: 100%;
  justify-content: center;
  min-height: 100vh;
  background-color: #5a5b5e;
  display: flex;
  font-size: 12px;
`;
export const TableContainer = styled.div`
  background-color: #ffffff;
  width: 90%;
  height: 90%;
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const HeaderTableItem = css`
  background-color: #0286be;
  padding: 15px;
  padding-left: 25px;
  padding-right: 25px;
  border-bottom: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
`;
export const TableItem = styled.div`
  display: flex;
  flex-direction: 'row';
  border-bottom: 0.5px solid #5a5b5e;
  align-items: center;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 5px;
  padding-left: 25px;
  padding-right: 25px;
  ${props => (props.isHeader ? HeaderTableItem : null)};
`;
export const ItemRank = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
  color: ${props => (props.isHeader ? '#fff' : '#000')};
`;
export const ItemProfile = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: ${props => (props.isHeader ? '35px' : '10px')};
  color: ${props => (props.isHeader ? '#fff' : '#000')};
`;
export const ItemPoints = styled.div`
  display: flex;
  min-width: 50px;
  margin-left: 10px;
  color: ${props => (props.isHeader ? '#fff' : '#000')};
`;
export const ItemImage = styled.img`
  background-color: #e5e5e5;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  border-width: 2px;
  border: 2px solid #5a5b5e;
  margin-right: 10px;
`;
export const ItemNumber = styled.div`
  background-color: #7acae9;
  color: #5a5b5e;
  text-align: center;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  padding: 3px;
  line-height: 20px;
`;
