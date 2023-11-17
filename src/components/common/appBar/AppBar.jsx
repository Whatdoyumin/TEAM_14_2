import { useNavigate } from 'react-router-dom';
import * as S from './AppBar.style';
import info from '../../../assets/images/info.svg';
import arrow from '../../../assets/images/arrow.svg';
import setting from '../../../assets/images/setting.svg';

export default function AppBar({ currentPage, showInfoBtn, onInfoBtnClick, backBtn, settingBtn }) {
  const navigate = useNavigate();

  return (
    <S.AppBarContainer>
      {backBtn && <S.Back src={arrow} alt="뒤로가기 이미지" onClick={() => navigate(-1)} />}
      <S.PageTitle>{currentPage}</S.PageTitle>
      {showInfoBtn && (
        <S.AppInfo onClick={onInfoBtnClick}>
          <img alt="도움말 이미지" src={info} />
        </S.AppInfo>
      )}
      {settingBtn && (
        <S.AppInfo onClick={onInfoBtnClick}>
          <img alt="설정 이미지" src={setting} />
        </S.AppInfo>
      )}
    </S.AppBarContainer>
  );
}

// ✅ USAGE
// <AppBar currentPage="나의 구름" />
