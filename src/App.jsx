import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import FAQs from './components/FAQs';
import Newsletter from './components/Newsletter';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <ProductShowcase />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <FAQs />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
