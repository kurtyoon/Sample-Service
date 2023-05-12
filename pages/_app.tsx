import './App.css';
import CustomLayout from './common/components/CustomLayout';
import type { AppProps /*, AppContext */ } from 'next/app';
import Auth from './common/components/Auth';
import Token from './common/components/Token';

function App({ Component, pageProps }: AppProps) {
  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  );
}

export default App;
