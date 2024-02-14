// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from './redux/themeSlice';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';
import './App.css'; 

function App() {
  const currentTheme = useSelector(state => state.theme.currentTheme);
  const dispatch = useDispatch();

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    dispatch(changeTheme(selectedTheme));
    // j'utilise dispatch pour exploiter ma fonction se trouvant dans mon reducer
  };

  return (
    <Router>
      <div className={`app ${currentTheme}`}>
        <select value={currentTheme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="mauve">Mauve</option>
          <option value="blue">Blue</option>
        </select>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
