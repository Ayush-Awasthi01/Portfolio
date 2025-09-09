import '../styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (!('theme' in localStorage)) localStorage.setItem('theme', 'dark');
    document.documentElement.classList.toggle('dark', localStorage.getItem('theme') === 'dark');
  }, []);

  return <Component {...pageProps} />;
}
