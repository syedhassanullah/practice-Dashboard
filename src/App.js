import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from './Context/Theme Context/ThemeContext';
import AppRoutes from './Routes/AppRoutes';
import { ThemeColorProvider } from './Context/Theme Context/ThemeColorContext'
import { OneThemeProvider } from './Context/Theme Context/OneThemeContext';
// import { ColorThemeProvider } from './Context/Theme Context/ColorThemeContext';

const App = () => {
  // Replace with real auth logic

  return (
    <OneThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </OneThemeProvider>

  );
};

export default App;
