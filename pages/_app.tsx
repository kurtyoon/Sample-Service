import './App.css';
import CustomLayout from './common/components/CustomLayout';
import type { AppProps /*, AppContext */ } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  );
}

export default App;
