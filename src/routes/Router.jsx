import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Main from '../pages/main/Main';
import Report from '../pages/report/Report';
import EmotionChoice from '../pages/emotionChoice/EmotionChoice';
import Mypage from '../pages/mypage/Mypage';
import Character from '../pages/character/Character';
import Signin from '../pages/signin/Signin';
import Signup from '../pages/signup/Signup';
import Splash from '../pages/splash/Splash';
import DiaryEdit from '../pages/diary/edit/DiaryEdit';
import DiaryView from '../pages/diary/view/DiaryView';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/splash" element={<Splash />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
        <Route path="/report" element={<Report />} />
        <Route path="/emotionChoice" element={<EmotionChoice />} />
        <Route path="/diary/*" element={<Outlet />}>
          <Route path="write" element={<DiaryEdit />} />

          {/* DiaryView는 date, emotion, image, text 인자로 받아서 지난 일기 보여줄 수 있습니다 */}
          <Route
            path="view"
            element={<DiaryView date="2023-11-09" emotion="happy" text="일기텍스트" />}
          />
        </Route>
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
}
