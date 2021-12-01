import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './store';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
     <CssBaseline />
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


