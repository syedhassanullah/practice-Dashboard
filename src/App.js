import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import DashboardLayout from './Layouts/DashboardLayouts';
import Home from './Pages/Dashboard/Home';
import Profile from './Pages/Dashboard/Profile';
import Settings from './Pages/Dashboard/Settings';
import Login from './Pages/Login';
import { ThemeProvider } from './Context/Theme Context/ThemeContext';

const App = () => {
  const isAuthenticated = true; // Replace with real auth logic

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Settings />} />
          </Route>

          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<h2>404 - Not Found</h2>} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
