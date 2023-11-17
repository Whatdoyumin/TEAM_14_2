import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Main from '../pages/main/Main';
import Report from '../pages/report/Report';
import EmotionChoice from '../pages/emotionChoice/EmotionChoice';
import Mypage from '../pages/mypage/Mypage';
import Character from '../pages/character/Character';
import Signin from '../pages/signin/Signin';
import Signup from '../pages/signup/Signup';
import DiaryTemplate from '../components/diaryTemplate/DiaryTemplate';
import Splash from '../pages/splash/Splash';

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
          <Route path="write" element={<DiaryTemplate writeable />} />
          <Route
            path="view"
            element={<DiaryTemplate date="2023-11-09" emotion="happy" text="일기텍스트" />}
          />
        </Route>
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
}
