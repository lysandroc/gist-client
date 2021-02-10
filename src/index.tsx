import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle } from 'theme/globalStyle';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
