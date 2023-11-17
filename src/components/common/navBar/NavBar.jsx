import { Link } from 'react-router-dom';
import * as S from './NavBar.style';
import home from '../../../assets/images/home.svg';
import homeEmpty from '../../../assets/images/home-empty.svg';
import myReport from '../../../assets/images/report.svg';
import myReportEmpty from '../../../assets/images/report-empty.svg';
import mypage from '../../../assets/images/mypage.svg';
import mypageEmpty from '../../../assets/images/mypage-empty.svg';

export default function NavBar({ currentPath }) {
  let homeIcon = homeEmpty;
  let myReportIcon = myReportEmpty;
  let mypageIcon = mypageEmpty;

  if (currentPath === '/') {
    homeIcon = home;
  } else if (currentPath === '/report') {
    myReportIcon = myReport;
  } else if (currentPath === '/mypage') {
    mypageIcon = mypage;
  }

  return (
    <S.BottomNav>
      <S.BottomDiv>
        <S.NavDiv>
          <Link to="/">
            <S.NavIcon alt="" src={homeIcon} />
            <S.NavText>홈</S.NavText>
          </Link>
        </S.NavDiv>
        <S.NavDiv>
          <Link to="/report">
            <S.NavIcon alt="" src={myReportIcon} />
            <S.NavText>기록</S.NavText>
          </Link>
        </S.NavDiv>
        <S.NavDiv>
          <Link to="/mypage">
            <S.NavIcon alt="" src={mypageIcon} />
            <S.NavText>설정</S.NavText>
          </Link>
        </S.NavDiv>
      </S.BottomDiv>
    </S.BottomNav>
  );
}
