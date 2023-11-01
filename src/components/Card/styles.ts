import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem 3rem;
  border-radius: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 360px;
  background-color: ${(props) =>
    props.theme.colors.background_100};
  box-shadow: 3px 4px 26px 0px rgba(0, 0, 0, 0.25);
`;

