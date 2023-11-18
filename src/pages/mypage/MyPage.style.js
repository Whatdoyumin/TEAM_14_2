import styled from 'styled-components';
import BoxDiv from '../../components/common/box/Box.style';
import characterBg from '../../assets/images/character-bg.svg';

export const ProfileName = styled.h3`
  display: inline-block;
  margin-right: 8px;
  font-family: 'NPSfontBold', sans-serif;
  color: var(--color-grey-900);
  font-size: var(--font-size-display3);
`;

export const EmailSpan = styled.span`
  font-size: var(--font-size-body2);
  color: var(--color-grey-400);
`;

export const ProfileImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 213px;
  margin: 8px 0;
  border-radius: 8px;
  background: no-repeat center bottom / cover var(--color-blue-50) url(${characterBg});

  img {
    position: absolute;
    top: 15%;
    left: 35%;
    width: 224px;
  }
`;

export const InfoBox = styled(BoxDiv)`
  padding: 15px 16px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-weight: 700;
    color: var(--color-blue-500);
  }

  p {
    text-align: right;
  }

  p span {
    display: block;
  }

  p span:first-child {
    color: var(--color-grey-400);
    font-size: var(--font-size-caption);
  }

  p span:last-child {
    font-size: 12px;
    font-weight: 500;
    color: var(--color-grey-600);
  }
`;

export const Menu = styled.button`
  width: 100%;
  padding: 16px 0;
  background-color: initial;
  text-align: left;
  font-size: var(--font-size-subhead);
  color: var(--color-grey-500);
`;
