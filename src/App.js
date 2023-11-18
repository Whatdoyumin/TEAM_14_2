/* eslint-disable import/no-extraneous-dependencies */
import React, { useReducer, useMemo, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './routes/Router';
import DiaryContext from './contexts/DiaryContext';
import GlobalFont from './styles/GlobalFont';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  const diaryReducer = (state, action) => {
    switch (action.type) {
      case 'SET_EMOTION':
        return {
          ...state,
          emotion: action.payload,
        };

      case 'SET_DATE':
        return {
          ...state,
          date: action.payload,
        };

      case 'SET_TODAY_WRITE':
        return {
          ...state,
          isWriteToday: action.payload,
        };

      default:
        return state;
    }
  };

  const initialState = {
    /**
     * 서버 열리면 서버에 있는 데이터 참고해서 라우팅 해주겠지만
     * emotion은 앱 실행되는 시점에 Get 요청 보내서 금일 데이터 있는지 확인 후
     * 여기 initialState emotion에 할당해줘야 함 안 그러면 에러 나요
     * isWriteToday도 앱 실행되는 시점에 Get 요청 보내서 금일 데이터 있는지 확인 후
     * 불리언 값으로 할당해주세요
     */
    emotion: '',
    date: '',
    isWriteToday: Boolean,
  };

  const [diaryState, dispatch] = useReducer(diaryReducer, initialState);

  const setEmotion = (emotion) => {
    dispatch({
      type: 'SET_EMOTION',
      payload: emotion,
    });
  };

  const setDate = (date) => {
    dispatch({
      type: 'SET_DATE',
      payload: date,
    });
  };

  const setTodayWrite = (bool) => {
    dispatch({
      type: 'SET_TODAY_WRITE',
      payload: bool,
    });
  };

  const value = useMemo(
    () => ({
      diaryState,
      setEmotion,
      setDate,
      setTodayWrite,
    }),
    [diaryState],
  );

  useEffect(() => {
    setTodayWrite(value.diaryState.emotion);
  }, []);

  const queryClient = new QueryClient();

  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <DiaryContext.Provider value={value}>
          <Router />
        </DiaryContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;
