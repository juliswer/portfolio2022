import Timeline from './components/Timeline'
import Header from './components/Header'
import Content from './components/Content';
import Faqs from './components/Faqs';
import Presentation from './components/Presentation';
import Cards from './components/Cards';
import About from './components/About';

export default function Home() {

  return (
    <div>
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
