import { styled } from 'styled-components';

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  max-width: var(--size-max-width);
  width: 100%;
  margin-left: calc(-1 * var(--size-side-gap));
  margin-top: 15px;
  background-color: white;
`;

export const PageTitle = styled.div`
  text-align: center;
  flex: 1;
  padding-top: 5px;
`;

export const AppInfo = styled.div`
  position: absolute;
  right: 15px;
  cursor: pointer;
`;
