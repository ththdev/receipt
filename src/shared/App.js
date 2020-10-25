import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil';
import HomeContainer from '../containers/HomeContainer';
import Login from '../pages/Login';
import { authService } from '../server/fbase';
import { UserState } from '../store/userState';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(UserState)
  const [init, setInit] = useState(false)

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [])

  return (
    init 
      ? <Route exact path='/' component={isLoggedIn ? HomeContainer : Login} />
      : "Initializing..."
  );
}

export default App;
