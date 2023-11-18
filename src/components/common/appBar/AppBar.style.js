import { styled } from 'styled-components';

export const AppBarContainer = styled.div`
  position: fixed;
  top: 0;
  max-width: var(--size-max-width);
  width: 100%;
  margin-left: calc(-1 * var(--size-side-gap));
  padding: 12px 0;
  background-color: var(--color-grey-50);
  z-index: 1;
`;

export const PageTitle = styled.div`
  font-size: var(--font-size-head);
  text-align: center;
`;

export const AppInfo = styled.div`
  position: absolute;
  top: 8px;
  right: 20px;
  cursor: pointer;
`;

export const Back = styled.img`
  position: absolute;
  top: 8px;
  left: 16px;
  cursor: pointer;
`;

export const Setting = styled.img`
  position: absolute;
  top: 8px;
  right: 20px;
  cursor: pointer;
`;
