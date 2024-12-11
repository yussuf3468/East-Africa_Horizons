import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Wrap the app in BrowserRouter
import { AuthProvider } from './context/AuthContext'; // Import the AuthProvider
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* BrowserRouter should be here */}
      <AuthProvider> {/* Wrap the app with AuthProvider */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
