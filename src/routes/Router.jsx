import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/main/Main';
import Report from '../pages/report/Report';
import EmotionChoice from '../pages/emotionChoice/EmotionChoice';
import Diary from '../pages/diary/Diary';
import Mypage from '../pages/mypage/Mypage';
import Character from '../pages/character/Character';
import Signin from '../pages/signin/Signin';
import Signup from '../pages/signup/Signup';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/emotionChoice" Component={EmotionChoice} />
        <Route path="/report" Component={Report} />
        <Route path="/diary" Component={Diary} />
        <Route path="/mypage" Component={Mypage} />
        <Route path="/character" Component={Character} />
        <Route path="/signin" Component={Signin} />
        <Route path="/signup" Component={Signup} />
      </Routes>
    </BrowserRouter>
  );
}
