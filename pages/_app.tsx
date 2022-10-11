import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/globals.css'


type NextPageWithLayout = NextPage & {
  getLayout?: (page: JSX.Element) => JSX.Element;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  // obtener mediante una constante, vamos a revisar el componente que se esta queriendo generar en este momento
  // getLayout mismo nombre que le pusimos a la funcion, si eso exite va a obtener ese layout o sino simplementa va a tomar la pagina
  // y va a retornar el page
  const getLayout = Component.getLayout || ((page) => page );

  // return (
  //   <Component {...pageProps} />
  // )
  return getLayout (<Component {...pageProps} />)
}

export default MyApp
