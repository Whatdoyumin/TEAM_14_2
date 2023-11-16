import { createGlobalStyle } from 'styled-components';

import SUITRegularOtf from '../assets/fonts/SUIT-Regular.otf';
import SUITMediumOtf from '../assets/fonts/SUIT-Medium.otf';
import SUITBoldOtf from '../assets/fonts/SUIT-Bold.otf';
import SUITRegularWoff2 from '../assets/fonts/SUIT-Regular.woff2';
import SUITMediumWoff2 from '../assets/fonts/SUIT-Medium.woff2';
import SUITBoldWoff2 from '../assets/fonts/SUIT-Bold.woff2';

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'NPSfontBold';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/NPSfontBold.woff2') format('woff2');
  }

  @font-face {
    font-family: "SUIT";
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url(${SUITRegularWoff2}) format("woff2"),
			url(${SUITRegularOtf}) format("opentype")
      ;
  }

	@font-face {
    font-family: "SUIT";
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url(${SUITMediumWoff2}) format("woff2"),
      url(${SUITMediumOtf}) format("opentype");
  }

	@font-face {
    font-family: "SUIT";
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: url(${SUITBoldWoff2}) format("woff2"),
      url(${SUITBoldOtf}) format("opentype");
  }
`;

export default GlobalFont;
