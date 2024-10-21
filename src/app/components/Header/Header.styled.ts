import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  margin-top: 100px;
  font-size: 20px;
`;

export const HeaderElement = styled.div<{ active?: boolean }>`
  display: flex;
  width: 100px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "1px solid blue" : "none")};
`;
