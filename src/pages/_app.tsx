import Footer from '@/features/Footer';
import Header from '@/features/Header';
import '@/styles/globals.css';
import AppStyled from '@/styles/styled';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <AppStyled>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </AppStyled>
        </>
    );
}
