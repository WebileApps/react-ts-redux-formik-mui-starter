import { PersistGate } from 'redux-persist/es/integration/react';
import './App.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import store, { persistor } from './store';
import theme from './themes';
import AppRoutes from './routes';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <div>
            <AppRoutes />
          </div>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
