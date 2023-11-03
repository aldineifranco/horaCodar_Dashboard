import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;

  margin: 20px;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    display: flex;
    padding: .75rem;
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #fff;
  }


`;
