import styled from 'styled-components';

export const Container = styled.div`
  margin: 30vh auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const Content = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Card = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${(props) =>
    props.theme.colors.background_100};
  box-shadow: 3px 4px 26px 0px rgba(0, 0, 0, 0.25);
`;