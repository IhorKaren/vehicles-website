import styled from "@emotion/styled";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: #eeeeee;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

export const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16;
`;

export const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2;
  border: "1px solid #eaeaea";
  margin-bottom: 8;
  margin-right: 8;
  width: 100;
  height: 100;
  padding: 4;
  box-sizing: "border-box";
`;

export const Image = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

export const ThumbInner = styled.div`
  max-width: 90px;
  max-height: 70px;
  min-width: 0;
  overflow: hidden;
`;
