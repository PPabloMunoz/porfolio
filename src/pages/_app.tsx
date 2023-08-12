import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import RootLayout from '@/components/Layout'
import { useThemeStore } from '@/store/ThemeStore'

export default function App({ Component, pageProps }: AppProps) {
  const theme = useThemeStore()
  return (
    <div className={theme.theme === 'dark' ? 'dark' : ''}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </div>
  )
}
