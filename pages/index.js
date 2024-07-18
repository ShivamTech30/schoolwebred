import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layouts/Layout'
import About from '../components/aboutinfo/About';
import Eventmain from '../components/newseventsection/Eventmain';
import Schoolaccreditation from '../components/schoolaccreditation/Schoolaccreditation';
import Trust from '../components/trust/Trust';
import Carouselswr from '../components/carousel/Carouselswr';


export default function Home() {
  return (
    <div>
      <link
        rel="preload"
        href="../public/BerkshireSwash-Regular.ttf"
        as="font"
        crossOrigin=""
      />
      <Layout>
        <Carouselswr />
        <About />
        <Eventmain />
        {/* <Schoolaccreditation /> */}
        <Trust />
      </Layout>
    </div>
  )
}
