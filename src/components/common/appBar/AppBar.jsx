import { AppBarContainer, AppInfo, PageTitle } from './AppBar.style';
import mypage from '../../../assets/images/mypage.svg';

export default function AppBar({ currentPage, showInfoBtn, onHelpBtnClick }) {
  return (
    <AppBarContainer>
      <PageTitle>{currentPage}</PageTitle>
      {showInfoBtn && (
        <AppInfo onClick={onHelpBtnClick}>
          <img alt="" src={mypage} />
        </AppInfo>
      )}
    </AppBarContainer>
  );
}
