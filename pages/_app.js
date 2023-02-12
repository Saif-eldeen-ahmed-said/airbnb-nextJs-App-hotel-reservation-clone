import '../styles/globals.css'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'



const loading =new ProgressBar({
size: 4,
color:"#fd5b61",
delay:200,
className:"z-11",
}
)

Router.events.on("routeChangeStart",loading.start);
Router.events.on("routeChangeComplete",loading.finish)
Router.events.on("routeChangeError",loading.finish)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
