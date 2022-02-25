import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'styles/theme';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';

const baseUrl = process.env.REACT_APP_BASE_URL;

const client = new ApolloClient({
  uri: `${baseUrl}/graphql`,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <ToastContainer />
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
