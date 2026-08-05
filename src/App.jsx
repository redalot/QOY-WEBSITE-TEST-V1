import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Structure from './pages/Structure';
import Training from './pages/Training';
import Manual from './pages/Manual';
import Gallery from './pages/Gallery';
import StartGuide from './pages/StartGuide';
import NotFound from './pages/NotFound';
import './index.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/training" element={<Training />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/start-guide" element={<StartGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
