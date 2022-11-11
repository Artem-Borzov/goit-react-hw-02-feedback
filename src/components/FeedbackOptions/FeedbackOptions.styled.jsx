import styled from '@emotion/styled';

export const Buttons = styled.div`
  display: flex;
  width: 250px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
`;

export const ButtonsItem = styled.button`
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
