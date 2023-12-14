import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from 'react-query';
import queryClient from './queryClient.tsx';
import { ThemeContextProvider } from './theme/ThemeContextProvider.tsx';
import './i18n.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
