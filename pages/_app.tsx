import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
  import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
