import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
)
