import '../style/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../style/calender.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import SimpleReactLightbox from "simple-react-lightbox";
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {

  return (
    <SimpleReactLightbox>
      <title>Demo-7</title>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
  // return <Component {...pageProps} />
}

export default MyApp
