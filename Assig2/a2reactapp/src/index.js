import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './routes/Login';
import Register from './routes/Register';
import Dashboard from './routes/Dashboard';
import Report from './routes/Report';
import SuburbSelectingPage from './routes/SuburbSelectingPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/Main" element={<App />}>
                    <Route path="" element={<SuburbSelectingPage />} />
                    <Route path="*" element={<SuburbSelectingPage />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Dashboard/:suburb" element={<Dashboard />} />
                    <Route path="Report" element={<Report />} />
                </Route>
                <Route path="/" element={<Login />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
