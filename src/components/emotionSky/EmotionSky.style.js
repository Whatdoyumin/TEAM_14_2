import { styled } from 'styled-components';
import Grass from '../../assets/images/grass.svg';

const EmotionSkyContainer = styled.div`
  background-color: var(--color-blue-50);
  height: 100vh;
  position: absolute;
  bottom: 0;
  margin-left: calc(-1 * var(--size-side-gap));
  width: 100%;
  background: no-repeat var(--color-blue-50) url(${Grass});
  background-position: center bottom -50px;
  z-index: 0;
`;

export default EmotionSkyContainer;
