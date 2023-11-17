import styled from 'styled-components';

export const BottomNav = styled.nav`
  max-width: var(--size-max-width);
  width: 100%;
  margin-left: calc(-1 * var(--size-side-gap));
  overflow: hidden;
  position: fixed;
  bottom: 0;
  background-color: var(--color-grey-50);
  box-shadow: 0px -2px 8px -2px rgba(0, 0, 0, 0.2);
`;

export const BottomDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 94px;
  padding: 12px;
`;

export const NavDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 48px;
  height: 52px;
  cursor: pointer;
`;

export const NavIcon = styled.img``;

export const NavText = styled.div`
  font-size: var(--font-size-caption);
  line-height: 20px;
  text-align: center;
`;
