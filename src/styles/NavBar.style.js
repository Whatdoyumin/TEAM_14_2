import { styled } from 'styled-components';

export const BottomNav = styled.nav`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.2);
`;

export const BottomDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  float: left;
  width: 100%;
  height: 94px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 4px;
`;

export const NavDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48px;
  height: 52px;
  padding: 8px 4px;
`;

export const NavIcon = styled.img`
  width: 32px;
  height: 32px;
  padding: 0;
`;

export const NavText = styled.div`
  font-size: 10px;
  line-height: 20px;
  text-align: center;
`;
