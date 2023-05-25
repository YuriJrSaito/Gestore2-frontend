import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useContext } from 'react'
import { DarkModeContext, DarkModeContextProvider } from '@/contexts/darkModeContext';

export default function App({ Component, pageProps }: AppProps) {
  
  const {darkMode} = useContext(DarkModeContext)
  
  return (
    <DarkModeContextProvider>
      <div className={`app ${darkMode ? "dark" : "light"}`}>
        <Component {...pageProps} />
      </div>
    </DarkModeContextProvider>
  )
}
