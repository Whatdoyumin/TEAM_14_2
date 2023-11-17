import * as S from './AppBar.style';
import mypage from '../../../assets/images/mypage.svg';

export default function AppBar({ currentPage, showInfoBtn, onHelpBtnClick }) {
  return (
    <S.AppBarContainer>
      <S.PageTitle>{currentPage}</S.PageTitle>
      {showInfoBtn && (
        <S.AppInfo onClick={onHelpBtnClick}>
          <img alt="" src={mypage} />
        </S.AppInfo>
      )}
    </S.AppBarContainer>
  );
}

// ✅ USAGE
// <AppBar title="나의 구름" />
