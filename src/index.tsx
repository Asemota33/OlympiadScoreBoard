import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Scoreboard from './scoreboard/scoreboard.component';
import ErrorPage from './error';
import Login from './scorekeeping';
import Matchups from './matchups/matchups.component';
import ScoreKeeping from './scorekeeping';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Scoreboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "scorekeeping",
    element: <ScoreKeeping />,
  },
  {
    path: "matchups",
    element: <Matchups />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

    {/* <App /> */}
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
