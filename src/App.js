import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/system';
import AuthenticationScreen from './modules/authentication/authentication_screen';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <AuthenticationScreen />
      </div>
    </ThemeProvider>
  );
}

export default App;
