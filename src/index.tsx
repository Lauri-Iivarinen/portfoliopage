import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Homepage } from './components/Homepage';
import { createTheme, ThemeProvider } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
  },
  {
    path: "career",
    element: <WorkExperience></WorkExperience>,
  },
  {
    path: "projects",
    element: <Projects></Projects>,
  },
]);
*/

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#16BAC5',
    },
    secondary: {
      main: '#26f500',
    },
  },
  typography: {
    fontFamily: "'Play', sans-serif",
    },
};

const theme = createTheme(themeOptions)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Homepage></Homepage>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
