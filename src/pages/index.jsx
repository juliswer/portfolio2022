import Timeline from './components/Timeline'
import Header from './components/Header'
import Content from './components/Content';
import Faqs from './components/Faqs';
import Presentation from './components/Presentation';
import Cards from './components/Cards';
import About from './components/About';
import Head from 'next/head';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Portfolio - Julian Swerdlin &copy;</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="container mx-auto">
        <Presentation />
        <Cards />
        <About />
        <Timeline />
        <Content />
        <Faqs />
      </div>
    </div>
  );
}
